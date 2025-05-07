// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { IoChatboxEllipsesOutline, IoArrowBackOutline, IoSend } from "react-icons/io5";
// import Picture from "@/components/ui/picture";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEnquiries } from "@/redux/EnquirySlice";
// import { fetchChatHistory, addMessage } from "@/redux/ChatSlice";
// import { getToken } from "@/utils/auth";
// import { sendSMS } from "@/redux/SmsSlice";

// const ChatsSection = () => {
//   const dispatch = useDispatch();
//   const { enquiries, loading, error } = useSelector((state) => state.enquiry);
//   const {  loading: chatLoading } = useSelector((state) => state.getContent);
//   const [activeChat, setActiveChat] = useState(null);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);
//   const chatMessages = useSelector((state) =>
//     activeChat?._id ? state.getContent.chatHistory[activeChat._id] || [] : []
//   );
//   const chatHistory = useSelector((state) => state.sms.chatHistory);
//   const messages = chatHistory[activeChat?._id] || [];
//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       dispatch(fetchEnquiries(token));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (activeChat) {
//       dispatch(fetchChatHistory(activeChat._id)); // Fetch chat history when active chat is set
//     }
//   }, [activeChat, dispatch]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatMessages]); // This will trigger whenever chatMessages changes

  
//   const handleSend = async (e) => {
//     e.preventDefault();
  
//     if (!newMessage.trim() || !activeChat?._id) return;
  
//     const newMsg = {
//       sender: "U",
//       msg: newMessage,
//       created: new Date().toISOString(),
//       isRead: true,
//       type: "text",
//     };
  
//     // Optimistically update Redux store
//     dispatch(addMessage({ chatId: activeChat._id, newMsg }));
  
//     // Clear input field
//     setNewMessage("");
  
//     const payload = {
//       id: activeChat._id,
//       msg: newMessage,
//     };
  
//     try {
//       // Send the message
//       await dispatch(sendSMS(payload));
  
//       // Fetch updated chat history immediately after sending the message
//       dispatch(fetchChatHistory(activeChat._id));
//     } catch (error) {
//       console.error("Failed to send message:", error);
  
//       // Handle failure by force-fetching the latest chat history
//       dispatch(fetchChatHistory(activeChat._id));
//     }
//   };
  

//   useEffect(() => {
//     console.log("Updated Chat History:", chatHistory);
//   }, [chatHistory]);
  

//   const formatDate = (date) => {
//     const now = new Date();
//     const messageDate = new Date(date);
//     const diffTime = now - messageDate;
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//     if (diffDays === 0) {
//       return messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//     } else if (diffDays === 1) {
//       return "Yesterday";
//     } else {
//       return messageDate.toLocaleDateString();
//     }
//   };

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <div className="flex items-center gap-2 cursor-pointer">
//           <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
//           <p>Enquiry</p>
//         </div>
//       </SheetTrigger>

//       <SheetContent side="right" className="w-full md:w-[400px]">
//         <SheetHeader className="py-4 text-center text-white bg-primary_color">
//           <SheetTitle className="text-center">Enquiries</SheetTitle>
//         </SheetHeader>

//         {!activeChat && (
//           <div className="p-4 space-y-3">
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p className="text-red-500">Error: {error}</p>
//             ) : (
//               enquiries.map((enquiry) => (
//                 <div
//                   key={enquiry._id}
//                   className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
//                   onClick={() => {
//                     setActiveChat(enquiry); 
//                   }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Picture src="/static/images/chat_logo.png" alt="logo" width={50} height={50} className="w-10 h-10 rounded-full" />
//                     <div>
//                       <p className="font-semibold">#{enquiry.enquiryNumber}</p>
//                       <p className="text-sm text-gray-500">{enquiry.name}</p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-400">
//                     {formatDate(enquiry.chat[0]?.created)}
//                   </p>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
                                                                                      
//         {activeChat && ( 
//           <div className="flex flex-col h-[calc(100vh-120px)]">
//             <div className="flex items-center p-4 border-b">
//               <IoArrowBackOutline
//                 className="text-xl cursor-pointer"
//                 onClick={() => setActiveChat(null)}
//               />
//               <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
//             </div>

//             <div className="flex-1 p-4 space-y-3 overflow-y-auto">
//               {chatLoading ? (
//                 <p className="text-center text-gray-400">Loading chat...</p>
//               ) : (chatHistory[activeChat._id] || activeChat.chat)?.length > 0 ? (
//                 (chatHistory[activeChat._id] || activeChat.chat).map((msg) => (
//                   <div
//                     key={msg._id}
//                     className={`flex ${msg.sender === "U" ? "justify-end" : "justify-start"}`}
//                   >
//                     <p
//                       className={`p-3 rounded-lg max-w-[75%] ${
//                         msg.sender === "U" ? "bg-[#FC342A] text-white" : "bg-[#F2F4F5]"
//                       }`}
//                     >
//                       {typeof msg.msg === "string" ? msg.msg : "Invalid message"}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-gray-500">No messages available</p>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             <div className="flex items-center p-3 border-t">
//               <input
//                 type="text"
//                 className="flex-1 p-2 border rounded-lg outline-none"
//                 placeholder="Type your message..."
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//               />
//               <button onClick={handleSend} className="p-2 ml-2 text-white bg-blue-500 rounded-lg">
//                 <IoSend className="text-lg" />
//               </button>
//             </div>
//           </div>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default ChatsSection;


// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetFooter,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";
// // import {
// //   IoChatboxEllipsesOutline,
// //   IoArrowBackOutline,
// //   IoSend,
// // } from "react-icons/io5";
// // import Picture from "@/components/ui/picture";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchEnquiries } from "@/redux/EnquirySlice";
// // import { fetchChatHistory, addMessage } from "@/redux/ChatSlice";
// // import { sendSMS } from "@/redux/SmsSlice";
// // import { getToken } from "@/utils/auth";

// // const ChatsSection = () => {
// //   const dispatch = useDispatch();
// //   const { enquiries, error } = useSelector((state) => state.enquiry);
// //   const { chatHistory } = useSelector((state) => state.chat);
// //   const [activeChat, setActiveChat] = useState(null);
// //   const [newMessage, setNewMessage] = useState("");
// //   const messagesEndRef = useRef(null);

// //   const messages = activeChat?._id ? chatHistory[activeChat._id] || [] : [];

// //   useEffect(() => {
// //     const token = getToken();
// //     if (token) {
// //       dispatch(fetchEnquiries(token));
// //     }

// //     // Restore chat on refresh
// //     const storedChat = localStorage.getItem("activeChat");
// //     if (storedChat) {
// //       setActiveChat(JSON.parse(storedChat));
// //     }
// //   }, [dispatch]);

// //   useEffect(() => {
// //     if (activeChat?._id) {
// //       localStorage.setItem("activeChat", JSON.stringify(activeChat));
// //       dispatch(fetchChatHistory(activeChat._id));
// //     }
// //   }, [activeChat, dispatch]);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   const handleSend = async (e) => {
// //     e.preventDefault();
// //     if (!newMessage.trim() || !activeChat?._id) return;

// //     const newMsg = {
// //       sender: "U",
// //       msg: newMessage,
// //       created: new Date().toISOString(),
// //       isRead: true,
// //       type: "text",
// //     };

// //     dispatch(addMessage({ chatId: activeChat._id, newMsg }));
// //     setNewMessage("");

// //     try {
// //       await dispatch(sendSMS({ id: activeChat._id, msg: newMessage })).unwrap();
// //       dispatch(fetchChatHistory(activeChat._id));
// //     } catch (error) {
// //       console.error("Failed to send message:", error);
// //       dispatch(fetchChatHistory(activeChat._id));
// //     }
// //   };

// //   const formatDate = (date) => {
// //     const now = new Date();
// //     const messageDate = new Date(date);
// //     const diffTime = now - messageDate;
// //     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// //     if (diffDays === 0) {
// //       return messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// //     } else if (diffDays === 1) {
// //       return "Yesterday";
// //     } else {
// //       return messageDate.toLocaleDateString();
// //     }
// //   };

// //   const handleBack = () => {
// //     setActiveChat(null);
// //     localStorage.removeItem("activeChat");
// //   };

// //   return (
// //     <Sheet>
// //       <SheetTrigger asChild>
// //         <div className="flex items-center gap-2 cursor-pointer">
// //           <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
// //           <p>Enquiry</p>
// //         </div>
// //       </SheetTrigger>

// //       <SheetContent side="right" className="w-full md:w-[400px]">
// //         <SheetHeader className="py-4 text-center text-white bg-primary_color">
// //           <SheetTitle className="text-center">Enquiries</SheetTitle>
// //         </SheetHeader>

// //         {!activeChat && (
// //           <div className="p-4 space-y-3">
// //             {error ? (
// //               <p className="text-red-500">Error: {error}</p>
// //             ) : (
// //               enquiries.map((enquiry) => (
// //                 <div
// //                   key={enquiry._id}
// //                   className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
// //                   onClick={() => setActiveChat(enquiry)}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <Picture
// //                       src="/static/images/chat_logo.png"
// //                       alt="logo"
// //                       width={50}
// //                       height={50}
// //                       className="w-10 h-10 rounded-full"
// //                     />
// //                     <div>
// //                       <p className="font-semibold">#{enquiry.enquiryNumber}</p>
// //                       <p className="text-sm text-gray-500">{enquiry.name}</p>
// //                     </div>
// //                   </div>
// //                   <p className="text-sm text-gray-400">
// //                     {formatDate(enquiry.chat[0]?.created)}
// //                   </p>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         )}

// //         {activeChat && (
// //           <div className="flex flex-col h-[calc(100vh-120px)]">
// //             <div className="flex items-center p-4 border-b">
// //               <IoArrowBackOutline className="text-xl cursor-pointer" onClick={handleBack} />
// //               <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
// //             </div>

// //             <div className="flex-1 p-4 space-y-3 overflow-y-auto">
// //               {messages.length > 0 ? (
// //                 messages.map((msg, index) => (
// //                   <div
// //                     key={index}
// //                     className={`flex ${msg.sender === "U" ? "justify-end" : "justify-start"}`}
// //                   >
// //                     <p
// //                       className={`p-3 rounded-lg max-w-[75%] ${
// //                         msg.sender === "U"
// //                           ? "bg-[#FC342A] text-white"
// //                           : "bg-[#F2F4F5]"
// //                       }`}
// //                     >
// //                       {typeof msg.msg === "string" ? msg.msg : "Invalid message"}
// //                     </p>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <p className="text-center text-gray-500">No messages available</p>
// //               )}
// //               <div ref={messagesEndRef} />
// //             </div>

// //             <div className="flex items-center p-3 border-t">
// //               <input
// //                 type="text"
// //                 className="flex-1 p-2 border rounded-lg outline-none"
// //                 placeholder="Type your message..."
// //                 value={newMessage}
// //                 onChange={(e) => setNewMessage(e.target.value)}
// //               />
// //               <button
// //                 onClick={handleSend}
// //                 className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
// //               >
// //                 <IoSend className="text-lg" />
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </SheetContent>
// //     </Sheet>
// //   );
// // };

// // export default ChatsSection;


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
import { fetchEnquiries } from "@/redux/EnquirySlice";
import { fetchChatHistory, addMessage } from "@/redux/ChatSlice";
import { sendSMS } from "@/redux/SmsSlice";
import { getToken } from "@/utils/auth";

const ChatsSection = () => {
  const dispatch = useDispatch();
  const { enquiries } = useSelector((state) => state.enquiry);
  const { chatHistory } = useSelector((state) => state.chat);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Get initial data on load
  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(fetchEnquiries(token));
    }

    const storedChat = localStorage.getItem("activeChat");
    const storedHistory = localStorage.getItem("chatHistory");

    if (storedChat) {
      const parsedChat = JSON.parse(storedChat);
      setActiveChat(parsedChat);

      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        setMessages(parsedHistory[parsedChat._id] || []);
      }

      dispatch(fetchChatHistory(parsedChat._id));
    }
  }, [dispatch]);

  // Sync Redux chat history to localStorage
  useEffect(() => {
    if (activeChat?._id && chatHistory[activeChat._id]) {
      setMessages(chatHistory[activeChat._id]);

      // Save entire chatHistory to localStorage
      const updatedHistory = {
        ...(JSON.parse(localStorage.getItem("chatHistory") || "{}")),
        [activeChat._id]: chatHistory[activeChat._id],
      };
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
    }
  }, [chatHistory, activeChat]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat?._id) return;

    const newMsg = {
      sender: "U",
      msg: newMessage,
      created: new Date().toISOString(),
      isRead: true,
      type: "text",
    };

    // Dispatch message to Redux
    dispatch(addMessage({ chatId: activeChat._id, newMsg }));

    // Update localStorage with new message only for the active chat
    const updatedHistory = {
      ...(JSON.parse(localStorage.getItem("chatHistory") || "{}")),
      [activeChat._id]: [...(chatHistory[activeChat._id] || []), newMsg],
    };

    localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));

    // Update local state
    setMessages((prevMessages) => [...prevMessages, newMsg]);

    // Clear the input
    setNewMessage("");

    try {
      // Send SMS to the backend
      await dispatch(sendSMS({ id: activeChat._id, msg: newMessage })).unwrap();
      dispatch(fetchChatHistory(activeChat._id)); // Optional refresh
    } catch (error) {
      console.error("Send failed:", error);
    }
  };


  const handleChatSelect = (chat) => {
    setActiveChat(chat);
    localStorage.setItem("activeChat", JSON.stringify(chat));

    // Load specific chat's messages from localStorage or Redux
    const storedHistory = localStorage.getItem("chatHistory");
    const parsedHistory = storedHistory ? JSON.parse(storedHistory) : {};
    setMessages(parsedHistory[chat._id] || []);

    dispatch(fetchChatHistory(chat._id));
  };

  const handleChatClose = () => {
    setActiveChat(null);
    localStorage.removeItem("activeChat");
  };

  const formatDate = (date) => {
    const now = new Date();
    const msgDate = new Date(date);
    const diff = now - msgDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return msgDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (days === 1) return "Yesterday";
    return msgDate.toLocaleDateString();
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

        {!activeChat ? (
          <div className="p-4 space-y-3">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry._id}
                className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() => handleChatSelect(enquiry)}
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
                <p className="text-sm text-gray-400">
                  {formatDate(enquiry.chat[0]?.created)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)]">
            <div className="flex items-center p-4 border-b">
              <IoArrowBackOutline
                className="text-xl cursor-pointer"
                onClick={handleChatClose}
              />
              <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "U" ? "justify-end" : "justify-start"}`}
                  >
                    <p
                      className={`p-3 rounded-lg max-w-[75%] ${
                        msg.sender === "U"
                          ? "bg-[#FC342A] text-white"
                          : "bg-[#F2F4F5]"
                      }`}
                    >
                      {msg.msg}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No messages</p>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center p-3 border-t">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg outline-none"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={handleSend}
                className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
              >
                <IoSend />
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ChatsSection;
