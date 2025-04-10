"use client";
import React, { useEffect, useState } from "react";
import CommonBannerPage from "../global/CommonBanner";
import { GetUrl } from "@/app/api/BaseUrl";

const TermsConditionsPage = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const getContent = async () => {
    setLoading(true);
    try {
      const { data } = await GetUrl("/cms/termCondition");
      setContent(data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getContent();
  }, []);
  return (
    <div className="w-full space-y-5 md:space-y-10">
      <CommonBannerPage
        image="/static/images/commonbanner.png"
        title={content?.title}
      />
      {loading ? (
        <div className="text-2xl font-semibold text-center">Loading...</div>
      ) : (
        <div className="container w-full px-5 mx-auto space-y-3 text-justify lg:space-y-6">
          <div className="text-[#272727] font-semibold text-3xl">
            {content?.title}
          </div>
          <div
            className="space-y-2 text-justify"
            dangerouslySetInnerHTML={{ __html: content?.content }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default TermsConditionsPage;
