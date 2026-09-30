"use client";

import { useState } from "react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hi! 👋 I'm the Tesfaye fekadu portfolio assistant. Ask me about his projects, technologies, services, or how to get in touch.",
        },
    ]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedInput = input.trim();

        if (!trimmedInput || isLoading) {
            return;
        }

        const userMessage: Message = {
            role: "user",
            content: trimmedInput,
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
        ]);

        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: trimmedInput }],
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            const assistantMessage: Message = {
                role: "assistant",
                content: data.message,
            };

            setMessages((currentMessages) => [
                ...currentMessages,
                assistantMessage,
            ]);
        } catch (error) {
            console.error("Chat error:", error);

            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    role: "assistant",
                    content:
                        "Sorry, I couldn't process that message. Please try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 z-50 flex h-[500px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:right-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
                        <div>
                            <h2 className="font-semibold tracking-tight">
                                Portfolio Assistant
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Ask me about my work
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() =>
                                    setMessages([
                                        {
                                            role: "assistant",
                                            content:
                                                "Hi! 👋 I'm the Tesfaye fekadu portfolio assistant. Ask me about his projects, technologies, services, or how to get in touch.",
                                        },
                                    ])
                                }
                                className="rounded-lg px-3 py-2 text-xs font-medium text-gray-500 transition hover:bg-gray-100 hover:text-black"
                            >
                                Clear
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
                                aria-label="Close chatbot"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
                        {messages.map((message, index) => (
                            <div
                                key={`${message.role}-${index}`}
                                className={
                                    message.role === "user"
                                        ? "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-black px-4 py-3 text-sm leading-6 text-white"
                                        : "max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-gray-700 shadow-sm"
                                }
                            >
                                {message.content}
                            </div>
                        ))}

                        {isLoading && (
                            <div
                                className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
                                aria-label="Assistant is thinking"
                            >
                                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={handleSubmit}
                        className="border-t border-gray-200 bg-white p-3"
                    >
                        <div className="flex gap-2">
                            <textarea
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" && !event.shiftKey) {
                                        event.preventDefault();

                                        if (!isLoading && input.trim()) {
                                            event.currentTarget.form?.requestSubmit();
                                        }
                                    }
                                }}
                                placeholder="Ask a question..."
                                disabled={isLoading}
                                rows={1}
                                className="min-h-[46px] min-w-0 flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                                aria-label="Chat message"
                            />

                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 z-50 flex h-14 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-gray-800 sm:right-6"
                aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
                aria-expanded={isOpen}
            >
                <span className="text-lg">{isOpen ? "×" : "💬"}</span>
                <span>{isOpen ? "Close" : "Chat"}</span>
            </button>
        </>
    );
}