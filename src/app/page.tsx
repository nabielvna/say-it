"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/_(.*?)_/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\n/g, "<br>");
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      
      const data = await response.json();
      const replyMessage: Message = { role: "model", content: data.reply };
      setMessages((prev) => [...prev, replyMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    
    setLoading(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !loading && input.trim()) {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto h-screen p-4">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <MessageCircle className="w-6 h-6" /> Chat with Copet
      </h1>
      <ScrollArea className="flex-1 border rounded-lg p-4 mt-4">
        {messages.map((msg, index) => (
          <Card key={index} className={`mb-2 ${msg.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
            <CardContent className="p-3">
              <strong>{msg.role === "user" ? "You" : "Copet"}:</strong> 
              <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
      <div className="flex gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={loading}
        />
        <Button onClick={sendMessage} disabled={loading || !input.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
}