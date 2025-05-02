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
// // import { fetchChatHistory , addMessage} from "@/redux/ChatSlice";
// // import { getToken } from "@/utils/auth";
// // import { sendSMS } from "@/redux/SmsSlice";

// // const ChatsSection = () => {
// //   const dispatch = useDispatch();
// //   const { enquiries, loading, error } = useSelector((state) => state.enquiry);
// //   const { chatHistory, loading: chatLoading } = useSelector((state) => state.getContent);
// //   const [activeChat, setActiveChat] = useState(null);
// //   const [newMessage, setNewMessage] = useState("");
// //   const messagesEndRef = useRef(null);
// //   const chatMessages = useSelector((state) =>
// //     activeChat?._id ? state.getContent.chatHistory[activeChat._id] || [] : []
// //   );
  

// //   useEffect(() => {
// //     const token = getToken();
// //     if (token) {
// //       dispatch(fetchEnquiries(token));
// //     }
// //   }, [dispatch]);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [activeChat, chatMessages]); // Import the sendSMS action

  
// //   const handleSend = async () => {
// //     if (newMessage.trim() && activeChat) {
// //       try {
// //         const payload = {
// //           id: activeChat._id,
// //           msg: newMessage,
// //         };
  
// //         // Send the SMS
// //         const actionResult = await dispatch(sendSMS(payload));
  
// //         if (sendSMS.rejected.match(actionResult)) {
// //           console.error("Failed to send message:", actionResult.payload);
// //         } else {
// //           // Update Redux state with the new message immediately
// //           dispatch(
// //             addMessage({
// //               chatId: activeChat._id,
// //               newMsg: {
// //                 _id: Date.now(), // Temporary unique key
// //                 sender: "U", // Assuming "U" is for user
// //                 msg: newMessage,
// //                 created: new Date().toISOString(),
// //               },
// //             })
// //           );
  
// //           // Fetch the updated chat history for this active chat
// //           dispatch(fetchChatHistory(activeChat._id));
  
// //           setNewMessage(""); // Clear the message input
// //         }
// //       } catch (error) {
// //         console.error("Failed to send message:", error);
// //       }
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

// //   return (
// //     <Sheet>
// //       <p className="invisible">Enquiry</p>
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
// //             {loading ? (
// //               <p>Loading...</p>
// //             ) : error ? (
// //               <p className="text-red-500">Error: {error}</p>
// //             ) : (
// //               enquiries.map((enquiry) => (
// //                 <div
// //                   key={enquiry._id}
// //                   className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
// //                   // onClick={() => {
// //                   //   setActiveChat(enquiry);
// //                   //   dispatch(fetchChatHistory(enquiry._id));
// //                   // }}
// //                   onClick={() => {
// //                     setActiveChat(enquiry); // Set active chat when clicked
// //                     dispatch(fetchChatHistory(enquiry._id)); // Fetch chat history
// //                   }}
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
// //               <IoArrowBackOutline
// //                 className="text-xl cursor-pointer"
// //                 onClick={() => setActiveChat(null)}
// //               />
// //               <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
// //             </div>

// //             {/* Chat Messages */}
// //             <div className="flex-1 p-4 space-y-3 overflow-y-auto">
// //               {chatLoading ? (
// //                 <p className="text-center text-gray-400">Loading chat...</p>
// //               ) : (chatHistory[activeChat._id] || activeChat.chat)?.length > 0 ? (
// //                 (chatHistory[activeChat._id] || activeChat.chat).map((msg) => (
// //                   <div
// //                     key={msg._id}
// //                     className={`flex ${msg.sender === "U" ? "justify-end" : "justify-start"}`}
// //                   >
// //                     <p
// //                       className={`p-3 rounded-lg max-w-[75%] ${
// //                         msg.sender === "U" ? "bg-[#FC342A] text-white" : "bg-[#F2F4F5]"
// //                       }`}
// //                     >
// //                       {typeof msg.msg === "string"
// //                         ? msg.msg
// //                         : typeof msg.msg === "object"
// //                         ? msg.msg.message || JSON.stringify(msg.msg)
// //                         : "Invalid message"}
// //                     </p>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <p className="text-center text-gray-500">No messages available</p>
// //               )}
// //               <div ref={messagesEndRef} />
// //             </div>

// //             {/* Chat Input */}
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

//   // const handleSend = async () => {
//   //   if (newMessage.trim() && activeChat) {
//   //     try {
//   //       const payload = {
//   //         id: activeChat._id,
//   //         msg: newMessage,
//   //       };
  
//   //       const newMsg = {
//   //         _id: Date.now(), // Temporary ID
//   //         sender: "U",
//   //         msg: newMessage,
//   //         created: new Date().toISOString(),
//   //       };
  
//   //       // Optimistically add to chat
//   //       dispatch(addMessage({ chatId: activeChat._id, newMsg }));
  
//   //       // Clear the input field immediately
//   //       setNewMessage("");
  
//   //       // Scroll to bottom
//   //       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  
//   //       // Send the actual message
//   //       const actionResult = await dispatch(sendSMS(payload));
  
//   //       // Optional: show toast if send failed
//   //       if (sendSMS.rejected.match(actionResult)) {
//   //         console.error("Message send failed:", actionResult.payload);
//   //         // Optional: remove the message or mark as failed visually
//   //       }
  
//   //       // ❌ DO NOT re-fetch chat here
//   //       // dispatch(fetchChatHistory(activeChat._id));
  
//   //     } catch (error) {
//   //       console.error("Message send error:", error);
//   //     }
//   //   }
//   // };

//   // const handleSend = async () => {
//   //   if (newMessage.trim() && activeChat) {
//   //     try {
//   //       const payload = {
//   //         id: activeChat._id,
//   //         msg: newMessage,
//   //       };
    
//   //       const newMsg = {
//   //         _id: Date.now(), // Temporary ID
//   //         sender: "U",
//   //         msg: newMessage,
//   //         created: new Date().toISOString(),
//   //       };
    
//   //       // Optimistically add the message to chat
//   //       dispatch(addMessage({ chatId: activeChat._id, newMsg }));
    
//   //       // Clear the input field immediately
//   //       setNewMessage("");
    
//   //       // Scroll to bottom
//   //       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    
//   //       // Send the actual message to the server
//   //       const actionResult = await dispatch(sendSMS(payload));
    
//   //       // Handle failure if message sending fails (you can display an error or remove the message from the UI if needed)
//   //       if (sendSMS.rejected.match(actionResult)) {
//   //         console.error("Message send failed:", actionResult.payload);
//   //         // Optional: Remove the optimistically added message or mark it visually as failed
//   //       }
    
//   //     } catch (error) {
//   //       console.error("Message send error:", error);
//   //     }
//   //   }
//   // };

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
  
//     // Optimistically update Redux UI
//     dispatch(addMessage({ chatId: activeChat._id, newMsg }));
  
//     // Clear input field
//     setNewMessage("");
  
//     // Send to backend
//     const payload = {
//       id: activeChat._id,
//       msg: newMessage,
//     };
  
//     dispatch(sendSMS(payload));
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
import { getToken } from "@/utils/auth";
import { sendSMS } from "@/redux/SmsSlice";
import { initiateSocket, getSocket } from "@/lib/socket";

const ChatsSection = () => {
  const dispatch = useDispatch();
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const token = getToken();

  const { enquiries, loading, error } = useSelector((state) => state.enquiry);
  const { loading: chatLoading } = useSelector((state) => state.getContent);
  const chatHistory = useSelector((state) => state.sms.chatHistory);
  const messages = chatHistory[activeChat?._id] || [];

  const socket = getSocket();

  useEffect(() => {
    if (token) {
      dispatch(fetchEnquiries(token));
      initiateSocket(); // Ensure socket is initialized once
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (activeChat?._id) {
      dispatch(fetchChatHistory(activeChat._id));
    }
  }, [activeChat, dispatch]);

  useEffect(() => {
    socket?.on("receive-message", (message) => {
      if (message.chatId === activeChat?._id) {
        dispatch(addMessage({ chatId: message.chatId, newMsg: message }));
      }
    });

    return () => {
      socket?.off("receive-message");
    };
  }, [activeChat, dispatch, socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat?._id) return;

    const newMsg = {
      _id: Date.now(),
      sender: "U",
      msg: newMessage,
      created: new Date().toISOString(),
      isRead: true,
      type: "text",
    };

    socket.emit("send-message", {
      chatId: activeChat._id,
      ...newMsg,
    });

    dispatch(addMessage({ chatId: activeChat._id, newMsg }));
    setNewMessage("");
  };

  const formatDate = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const diffTime = now - messageDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString();
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

        {!activeChat ? (
          <div className="p-4 space-y-3">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
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
                  <p className="text-sm text-gray-400">
                    {formatDate(enquiry.chat[0]?.created)}
                  </p>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)]">
            <div className="flex items-center p-4 border-b">
              <IoArrowBackOutline
                className="text-xl cursor-pointer"
                onClick={() => setActiveChat(null)}
              />
              <p className="ml-3 font-semibold">
                #{activeChat?.enquiryNumber}
              </p>
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              {chatLoading ? (
                <p className="text-center text-gray-400">Loading chat...</p>
              ) : messages.length > 0 ? (
                messages.map((msg) => (
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
                      {typeof msg.msg === "string"
                        ? msg.msg
                        : "Invalid message"}
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

