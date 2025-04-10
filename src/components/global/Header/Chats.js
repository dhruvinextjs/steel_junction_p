"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  IoChatboxEllipsesOutline,
  IoArrowBackOutline,
  IoSend,
} from "react-icons/io5";
import Picture from "@/components/ui/picture";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetChatHistory,
  handleGetChatList,
  handleSendMessage,
} from "@/redux/GetContentSlice";

const ChatsSection = () => {
  const dispatch = useDispatch();
  const { enquiries, chatHistory, loading } = useSelector(
    (state) => state.getContent
  );
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Fetch chat list on mount
  // useEffect(() => {
  //   dispatch(handleGetChatList());
  // }, [dispatch]);

  // Fetch chat history when activeChat changes
  useEffect(() => {
    if (activeChat) {
      dispatch(handleGetChatHistory(activeChat._id));
    }
  }, [activeChat, dispatch]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, activeChat]);

  const handleSend = async () => {
    if (newMessage.trim() && activeChat) {
      try {
        await dispatch(
          handleSendMessage({ enquiryId: activeChat._id, message: newMessage })
        ).unwrap();
        setNewMessage("");
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
          <p>Enquiry</p>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-full md:w-[400px]">
        <SheetHeader className="py-4 text-center text-white bg-primary_color">
          <SheetTitle className="text-center">Enquiries</SheetTitle>
        </SheetHeader>

        {/* Enquiry List */}
        {!activeChat && (
          <div className="p-4 space-y-3">
            {loading ? (
              <p>Loading...</p>
            ) : (
              enquiries.map((enquiry) => (
                <div
                  key={enquiry._id}
                  className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => setActiveChat(enquiry)}
                >
                  <div className="flex items-center gap-3">
                    <Picture
                      src="/static/images/chat_logo.png"
                      alt="logo"
                      width={50}
                      height={50}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">#{enquiry.enquiryNumber}</p>
                      <p className="text-sm text-gray-500">{enquiry.name}</p>
                    </div>
                  </div>
                  <IoArrowBackOutline className="text-gray-400" />
                </div>
              ))
            )}
          </div>
        )}

        {/* Chat Window */}
        {activeChat && (
          <div
            className={`flex flex-col h-[calc(100vh-120px)] ${
              activeChat ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center p-4 border-b">
              <IoArrowBackOutline
                className="text-xl cursor-pointer"
                onClick={() => setActiveChat(null)}
              />
              <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
            </div>

            {/* Chat Messages */}
            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              {chatHistory[activeChat?._id]?.length > 0 ? (
                chatHistory[activeChat?._id]?.map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex ${
                      msg.sender === "U" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <p
                      className={`p-3 rounded-lg max-w-[75%] ${
                        msg.sender === "U"
                          ? "bg-[#FC342A] text-white"
                          : "bg-[#F2F4F5]"
                      }`}
                    >
                      {/* Fix: Ensure only a string is rendered */}
                      {typeof msg.msg === "string"
                        ? msg.msg
                        : typeof msg.msg === "object"
                        ? msg.msg.message || JSON.stringify(msg.msg)
                        : "Invalid message format"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No messages available
                </p>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="flex items-center p-3 border-t">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg outline-none"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={handleSend}
                className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
              >
                <IoSend className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ChatsSection;
