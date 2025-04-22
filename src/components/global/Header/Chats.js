// // // // "use client";
// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import {
// // // //   Sheet,
// // // //   SheetContent,
// // // //   SheetFooter,
// // // //   SheetHeader,
// // // //   SheetTitle,
// // // //   SheetTrigger,
// // // // } from "@/components/ui/sheet";
// // // // import {
// // // //   IoChatboxEllipsesOutline,
// // // //   IoArrowBackOutline,
// // // //   IoSend,
// // // // } from "react-icons/io5";
// // // // import Picture from "@/components/ui/picture";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import {
// // // //   handleGetChatHistory,
// // // //   handleGetChatList,
// // // //   handleSendMessage,
// // // // } from "@/redux/GetContentSlice";

// // // // const ChatsSection = () => {
// // // //   const dispatch = useDispatch();
// // // //   const { enquiries, chatHistory, loading } = useSelector(
// // // //     (state) => state.getContent
// // // //   );
// // // //   const [activeChat, setActiveChat] = useState(null);
// // // //   const [newMessage, setNewMessage] = useState("");
// // // //   const messagesEndRef = useRef(null);

// // // //   // Fetch chat list on mount
// // // //   // useEffect(() => {
// // // //   //   dispatch(handleGetChatList());
// // // //   // }, [dispatch]);

// // // //   // Fetch chat history when activeChat changes
// // // //   useEffect(() => {
// // // //     if (activeChat) {
// // // //       dispatch(handleGetChatHistory(activeChat._id));
// // // //     }
// // // //   }, [activeChat, dispatch]);

// // // //   // Auto-scroll to latest message
// // // //   useEffect(() => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   }, [chatHistory, activeChat]);

// // // //   const handleSend = async () => {
// // // //     if (newMessage.trim() && activeChat) {
// // // //       try {
// // // //         await dispatch(
// // // //           handleSendMessage({ enquiryId: activeChat._id, message: newMessage })
// // // //         ).unwrap();
// // // //         setNewMessage("");
// // // //       } catch (error) {
// // // //         console.error("Failed to send message:", error);
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Sheet>
// // // //       <p className="invisible">Eniquiry</p>
// // // //       <SheetTrigger asChild>
// // // //         <div className="flex items-center gap-2 cursor-pointer">
// // // //           <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
// // // //           <p>Enquiry</p>
// // // //         </div>
// // // //       </SheetTrigger>
// // // //       <SheetContent side="right" className="w-full md:w-[400px]">
// // // //         <SheetHeader className="py-4 text-center text-white bg-primary_color">
// // // //           <SheetTitle className="text-center">Enquiries</SheetTitle>
// // // //         </SheetHeader>

// // // //         {/* Enquiry List */}
// // // //         {!activeChat && (
// // // //           <div className="p-4 space-y-3">
// // // //             {loading ? (
// // // //               <p>Loading...</p>
// // // //             ) : (
// // // //               enquiries.map((enquiry) => (
// // // //                 <div
// // // //                   key={enquiry._id}
// // // //                   className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
// // // //                   onClick={() => setActiveChat(enquiry)}
// // // //                 >
// // // //                   <div className="flex items-center gap-3">
// // // //                     <Picture
// // // //                       src="/static/images/chat_logo.png"
// // // //                       alt="logo"
// // // //                       width={50}
// // // //                       height={50}
// // // //                       className="w-10 h-10 rounded-full"
// // // //                     />
// // // //                     <div>
// // // //                       <p className="font-semibold">#{enquiry.enquiryNumber}</p>
// // // //                       <p className="text-sm text-gray-500">{enquiry.name}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <IoArrowBackOutline className="text-gray-400" />
// // // //                 </div>
// // // //               ))
// // // //             )}
// // // //           </div>
// // // //         )}

// // // //         {/* Chat Window */}
// // // //         {activeChat && (
// // // //           <div
// // // //             className={`flex flex-col h-[calc(100vh-120px)] ${
// // // //               activeChat ? "block" : "hidden"
// // // //             }`}
// // // //           >
// // // //             <div className="flex items-center p-4 border-b">
// // // //               <IoArrowBackOutline
// // // //                 className="text-xl cursor-pointer"
// // // //                 onClick={() => setActiveChat(null)}
// // // //               />
// // // //               <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
// // // //             </div>

// // // //             {/* Chat Messages */}
// // // //             {/* Chat Messages */}
// // // //             <div className="flex-1 p-4 space-y-3 overflow-y-auto">
// // // //               {chatHistory[activeChat?._id]?.length > 0 ? (
// // // //                 chatHistory[activeChat?._id]?.map((msg) => (
// // // //                   <div
// // // //                     key={msg._id}
// // // //                     className={`flex ${
// // // //                       msg.sender === "U" ? "justify-end" : "justify-start"
// // // //                     }`}
// // // //                   >
// // // //                     <p
// // // //                       className={`p-3 rounded-lg max-w-[75%] ${
// // // //                         msg.sender === "U"
// // // //                           ? "bg-[#FC342A] text-white"
// // // //                           : "bg-[#F2F4F5]"
// // // //                       }`}
// // // //                     >
// // // //                       {/* Fix: Ensure only a string is rendered */}
// // // //                       {typeof msg.msg === "string"
// // // //                         ? msg.msg
// // // //                         : typeof msg.msg === "object"
// // // //                         ? msg.msg.message || JSON.stringify(msg.msg)
// // // //                         : "Invalid message format"}
// // // //                     </p>
// // // //                   </div>
// // // //                 ))
// // // //               ) : (
// // // //                 <p className="text-center text-gray-500">
// // // //                   No messages available
// // // //                 </p>
// // // //               )}
// // // //               <div ref={messagesEndRef} />
// // // //             </div>

// // // //             {/* Chat Input */}
// // // //             <div className="flex items-center p-3 border-t">
// // // //               <input
// // // //                 type="text"
// // // //                 className="flex-1 p-2 border rounded-lg outline-none"
// // // //                 placeholder="Type your message..."
// // // //                 value={newMessage}
// // // //                 onChange={(e) => setNewMessage(e.target.value)}
// // // //               />
// // // //               <button
// // // //                 onClick={handleSend}
// // // //                 className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
// // // //               >
// // // //                 <IoSend className="text-lg" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </SheetContent>
// // // //     </Sheet>
// // // //   );
// // // // };

// // // // export default ChatsSection;


// // // "use client";
// // // import React, { useState, useEffect, useRef } from "react";
// // // import {
// // //   Sheet,
// // //   SheetContent,
// // //   SheetFooter,
// // //   SheetHeader,
// // //   SheetTitle,
// // //   SheetTrigger,
// // // } from "@/components/ui/sheet";
// // // import {
// // //   IoChatboxEllipsesOutline,
// // //   IoArrowBackOutline,
// // //   IoSend,
// // // } from "react-icons/io5";
// // // import Picture from "@/components/ui/picture";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { fetchEnquiries } from "@/redux/EnquirySlice"; // Import fetchEnquiries action
// // // import { getToken } from "@/utils/auth"; // A utility to get the token from localStorage or context
 
// // // const ChatsSection = () => {
// // //   const dispatch = useDispatch();
// // //   const { enquiries, loading, error } = useSelector((state) => state.enquiry); // Access state from Redux
// // //   const [activeChat, setActiveChat] = useState(null);
// // //   const [newMessage, setNewMessage] = useState("");
// // //   const messagesEndRef = useRef(null);
// // //   const {  chatHistory } = useSelector(
// // //         (state) => state.getContent
// // //        );
 
// // //   // Fetch enquiries when the component mounts
// // //   useEffect(() => {
// // //     const token = getToken(); // Ensure you have a function to get the token
// // //     if (token) {
// // //       dispatch(fetchEnquiries(token)); // Dispatch fetchEnquiries with token
// // //     }
// // //   }, [dispatch]);
 
// // //   // Auto-scroll to latest message
// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [activeChat]);
 
// // //   const handleSend = async () => {
// // //     if (newMessage.trim() && activeChat) {
// // //       try {
// // //         // Handle sending message logic here
// // //         // Make sure to dispatch send message action if needed
// // //         setNewMessage(""); // Reset message field
// // //       } catch (error) {
// // //         console.error("Failed to send message:", error);
// // //       }
// // //     }
// // //   };

// // //   // Helper function to format the date and time
// // // const formatDate = (date) => {
// // //   const now = new Date();
// // //   const messageDate = new Date(date);
  
// // //   const diffTime = now - messageDate;
// // //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// // //   if (diffDays === 0) {
// // //     // If today, return the time in HH:MM format
// // //     return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// // //   } else if (diffDays === 1) {
// // //     return "Yesterday";
// // //   } else {
// // //     return messageDate.toLocaleDateString(); // Returns the date in MM/DD/YYYY format
// // //   }
// // // };

 
// // //   return (
// // //     <Sheet>
// // //       <p className="invisible">Enquiry</p>
// // //       <SheetTrigger asChild>
// // //         <div className="flex items-center gap-2 cursor-pointer">
// // //           <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
// // //           <p>Enquiry</p>
// // //         </div>
// // //       </SheetTrigger>
// // //       <SheetContent side="right" className="w-full md:w-[400px]">
// // //         <SheetHeader className="py-4 text-center text-white bg-primary_color">
// // //           <SheetTitle className="text-center">Enquiries</SheetTitle>
// // //         </SheetHeader>
 
// // //         {/* Enquiry List */}
// // //         {!activeChat && (
// // //   <div className="p-4 space-y-3">
// // //     {loading ? (
// // //       <p>Loading...</p>
// // //     ) : error ? (
// // //       <p className="text-red-500">Error: {error}</p>
// // //     ) : (
// // //       enquiries.map((enquiry) => (
// // //         <div
// // //           key={enquiry._id}
// // //           className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
// // //           onClick={() => setActiveChat(enquiry)}
// // //         >
// // //           <div className="flex items-center gap-3">
// // //             <Picture
// // //               src="/static/images/chat_logo.png"
// // //               alt="logo"
// // //               width={50}
// // //               height={50}
// // //               className="w-10 h-10 rounded-full"
// // //             />
// // //             <div>
// // //               <p className="font-semibold">#{enquiry.enquiryNumber}</p>
// // //               <p className="text-sm text-gray-500">{enquiry.name}</p>
// // //             </div>
// // //           </div>
// // //           {/* Display formatted date */}
// // //           <p className="text-sm text-gray-400">
// // //             {formatDate(enquiry.chat[0].created)}
// // //           </p>
// // //         </div>
// // //       ))
// // //     )}
// // //   </div>
// // // )}
// // //         {/* Chat Window */}
// // //         {activeChat && (
// // //           <div
// // //             className={`flex flex-col h-[calc(100vh-120px)] ${activeChat ? "block" : "hidden"}`}
// // //           >
// // //             <div className="flex items-center p-4 border-b">
// // //               <IoArrowBackOutline
// // //                 className="text-xl cursor-pointer"
// // //                 onClick={() => setActiveChat(null)}
// // //               />
// // //               <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
// // //             </div>
 
// // //             {/* Chat Messages */}
// // //             <div className="flex-1 p-4 space-y-3 overflow-y-auto">
// // //               {chatHistory[activeChat?._id]?.length > 0 ? (
// // //                 chatHistory[activeChat?._id]?.map((msg) => (
// // //                   <div
// // //                     key={msg._id}
// // //                     className={`flex ${
// // //                       msg.sender === "U" ? "justify-end" : "justify-start"
// // //                     }`}
// // //                   >
// // //                     <p
// // //                       className={`p-3 rounded-lg max-w-[75%] ${
// // //                         msg.sender === "U"
// // //                           ? "bg-[#FC342A] text-white"
// // //                           : "bg-[#F2F4F5]"
// // //                       }`}
// // //                     >
// // //                       {typeof msg.msg === "string"
// // //                         ? msg.msg
// // //                         : typeof msg.msg === "object"
// // //                         ? msg.msg.message || JSON.stringify(msg.msg)
// // //                         : "Invalid message format"}
// // //                     </p>
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <p className="text-center text-gray-500">No messages available</p>
// // //               )}
// // //               <div ref={messagesEndRef} />
// // //             </div>
 
// // //             {/* Chat Input */}
// // //             <div className="flex items-center p-3 border-t">
// // //               <input
// // //                 type="text"
// // //                 className="flex-1 p-2 border rounded-lg outline-none"
// // //                 placeholder="Type your message..."
// // //                 value={newMessage}
// // //                 onChange={(e) => setNewMessage(e.target.value)}
// // //               />
// // //               <button
// // //                 onClick={handleSend}
// // //                 className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
// // //               >
// // //                 <IoSend className="text-lg" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </SheetContent>
// // //     </Sheet>
// // //   );
// // // };
 
// // // export default ChatsSection;


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
// // import { fetchEnquiries } from "@/redux/EnquirySlice"; // Import fetchEnquiries action
// // import { fetchChatHistory } from "@/redux/ChatSlice"; // Import fetchChatHistory action
// // import { getToken } from "@/utils/auth"; // A utility to get the token from localStorage or context

// // const ChatsSection = () => {
// //   const dispatch = useDispatch();
// //   const { enquiries, loading, error } = useSelector((state) => state.enquiry); // Access state from Redux
// //   const { chatHistory, loading: chatLoading } = useSelector((state) => state.getContent); // Access chat slice
// //   const [activeChat, setActiveChat] = useState(null);
// //   const [newMessage, setNewMessage] = useState("");
// //   const messagesEndRef = useRef(null);

// //   // Fetch enquiries when the component mounts
// //   useEffect(() => {
// //     const token = getToken(); // Ensure you have a function to get the token
// //     if (token) {
// //       dispatch(fetchEnquiries(token));
// //     }
// //   }, [dispatch]);

// //   // Auto-scroll to latest message
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [activeChat, chatHistory]);

// //   const handleSend = async () => {
// //     if (newMessage.trim() && activeChat) {
// //       try {
// //         // 🔄 Handle send message logic here (will be added later)
// //         setNewMessage("");
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

// //         {/* Enquiry List */}
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
// //                   onClick={() => {
// //                     setActiveChat(enquiry);
// //                     dispatch(fetchChatHistory(enquiry._id));
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

// //         {/* Chat Window */}
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
// //               ) : chatHistory[activeChat?._id]?.length > 0 ? (
// //                 chatHistory[activeChat._id].map((msg) => (
// //                   <div
// //                     key={msg._id}
// //                     className={`flex ${msg.sender === "U" ? "justify-end" : "justify-start"}`}
// //                   >
// //                     <p
// //                       className={`p-3 rounded-lg max-w-[75%] ${
// //                         msg.sender === "U"
// //                           ? "bg-[#FC342A] text-white"
// //                           : "bg-[#F2F4F5]"
// //                       }`}
// //                     >
// //                       {typeof msg.msg === "string"
// //                         ? msg.msg
// //                         : typeof msg.msg === "object"
// //                         ? msg.msg.message || JSON.stringify(msg.msg)
// //                         : "Invalid message format"}
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
import { fetchChatHistory } from "@/redux/ChatSlice";
import { getToken } from "@/utils/auth";
import { sendSMS } from "@/redux/SmsSlice";

const ChatsSection = () => {
  const dispatch = useDispatch();
  const { enquiries, loading, error } = useSelector((state) => state.enquiry);
  const { chatHistory, loading: chatLoading } = useSelector((state) => state.getContent);

  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(fetchEnquiries(token));
    }
  }, [dispatch]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat, chatHistory]); // Import the sendSMS action
  
  
  const handleSend = async () => {
    if (newMessage.trim() && activeChat) {
      try {
        const payload = {
          id: activeChat._id, // Pass the activeChat's ID
          msg: newMessage,
        };
  
        console.log("Sending message:", payload); // Log the payload being sent
  
        const actionResult = await dispatch(sendSMS(payload));
  
        if (sendSMS.rejected.match(actionResult)) {
          console.error("Failed to send message:", actionResult.payload);
        } else {
          setNewMessage("");
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        // Log error details
        if (error.response) {
          console.error("Error response:", error.response);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Unknown error:", error.message);
        }
      }
    }
  };
  
  
  const formatDate = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const diffTime = now - messageDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString();
    }
  };

  return (
    <Sheet>
      <p className="invisible">Enquiry</p>
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

        {!activeChat && (
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
                  // onClick={() => {
                  //   setActiveChat(enquiry);
                  //   dispatch(fetchChatHistory(enquiry._id));
                  // }}
                  onClick={() => {
                    setActiveChat(enquiry); // Set active chat when clicked
                    dispatch(fetchChatHistory(enquiry._id)); // Fetch chat history
                  }}
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
        )}

        {activeChat && (
          <div className="flex flex-col h-[calc(100vh-120px)]">
            <div className="flex items-center p-4 border-b">
              <IoArrowBackOutline
                className="text-xl cursor-pointer"
                onClick={() => setActiveChat(null)}
              />
              <p className="ml-3 font-semibold">#{activeChat?.enquiryNumber}</p>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              {chatLoading ? (
                <p className="text-center text-gray-400">Loading chat...</p>
              ) : (chatHistory[activeChat._id] || activeChat.chat)?.length > 0 ? (
                (chatHistory[activeChat._id] || activeChat.chat).map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex ${msg.sender === "U" ? "justify-end" : "justify-start"}`}
                  >
                    <p
                      className={`p-3 rounded-lg max-w-[75%] ${
                        msg.sender === "U" ? "bg-[#FC342A] text-white" : "bg-[#F2F4F5]"
                      }`}
                    >
                      {typeof msg.msg === "string"
                        ? msg.msg
                        : typeof msg.msg === "object"
                        ? msg.msg.message || JSON.stringify(msg.msg)
                        : "Invalid message"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No messages available</p>
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


// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {
//   IoChatboxEllipsesOutline,
//   IoArrowBackOutline,
//   IoSend,
// } from "react-icons/io5";
// import Picture from "@/components/ui/picture";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEnquiries } from "@/redux/EnquirySlice";
// import { fetchChatHistory } from "@/redux/ChatSlice";
// import { getToken } from "@/utils/auth";
// import { sendSMS,addMessage } from "@/redux/SmsSlice";

// const ChatsSection = () => {
//   const dispatch = useDispatch();
//   const { enquiries, loading, error } = useSelector((state) => state.enquiry);
//   const { chatHistory, loading: chatLoading } = useSelector((state) => state.getContent);

//   const [activeChat, setActiveChat] = useState(null);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString("en-IN", {
//       dateStyle: "medium",
//       timeStyle: "short",
//     });
//   };
  

//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       dispatch(fetchEnquiries(token));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [activeChat, chatHistory]);

//   useEffect(() => {
//     if (activeChat) {
//       dispatch(fetchChatHistory(activeChat._id));
//     }
//   }, [activeChat, dispatch]);
  
  

//   // const handleSend = async () => {
//   //   if (newMessage.trim() && activeChat) {
//   //     try {
//   //       const payload = {
//   //         id: activeChat._id,
//   //         msg: newMessage,
//   //       };

//   //       const actionResult = await dispatch(sendSMS(payload));

//   //       if (sendSMS.rejected.match(actionResult)) {
//   //         console.error("Failed to send message:", actionResult.payload);
//   //       } else {
//   //         dispatch(fetchChatHistory(activeChat._id));
//   //       }
//   //     } catch (error) {
//   //       console.error("Failed to send message:", error);
//   //     }

//   //     setNewMessage("");
//   //   }
//   // };

//   const handleSend = async () => {
//     if (newMessage.trim() && activeChat) {
//       const payload = {
//         id: activeChat._id,
//         msg: newMessage,
//       };
  
//       // Create a user message object for immediate UI update
//       const userMsg = {
//         _id: Date.now(), // Temporary ID for the new message
//         sender: "U", // User sender
//         msg: newMessage,
//         created: new Date().toISOString(),
//       };
  
//       // Optimistically update the UI with the new message
//       dispatch(addMessage({ chatId: activeChat._id, newMsg: userMsg }));
  
//       // After dispatching the message, send it via the API
//       try {
//         const actionResult = await dispatch(sendSMS(payload));
  
//         if (sendSMS.rejected.match(actionResult)) {
//           console.error("Failed to send message:", actionResult.payload);
//         } else {
//           // Successfully sent the message, fetch updated chat history
//           dispatch(fetchChatHistory(activeChat._id));
//         }
//       } catch (error) {
//         console.error("Send failed:", error);
//       }
  
//       // Clear the input field after sending the message
//       setNewMessage("");
//     }
//   };  

//   return (
//     <Sheet>
//       <p className="invisible">Enquiry</p>
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
//                     dispatch(fetchChatHistory(enquiry._id));
//                   }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Picture
//                       src="/static/images/chat_logo.png"
//                       alt="logo"
//                       width={50}
//                       height={50}
//                       className="w-10 h-10 rounded-full"
//                     />
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
//                       {typeof msg.msg === "string"
//                         ? msg.msg
//                         : typeof msg.msg === "object"
//                         ? msg.msg.message || JSON.stringify(msg.msg)
//                         : "Invalid message"}
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
//               <button
//                 onClick={handleSend}
//                 className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
//               >
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
