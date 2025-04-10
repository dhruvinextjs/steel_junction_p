"use client";
import React, { useEffect, useState } from "react";
import CommonBannerPage from "../global/CommonBanner";
import { GetUrl } from "@/app/api/BaseUrl";

const AboutUsPage = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const getContent = async () => {
    setLoading(true);
    try {
      const { data } = await GetUrl("/cms/aboutUs");
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
        <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-16">
          <div className="space-y-2">
            <div
              className="text-[#333333] space-y-2 text-sm text-justify"
              // dangerouslySetInnerHTML={{
              //   __html: DOMPurify.sanitize(item.content),
              // }}
              dangerouslySetInnerHTML={{ __html: content?.content }}
            />
          </div>
        </div>
      )}
      {/* <div
        // dangerouslySetInnerHTML={{ __html: content?.content }}
        className="container w-full px-5 mx-auto lg:space-y-14 space-y-7 md:px-10"
      >
        <div className="w-full">
          <p className="mx-auto text-justify text-opacity-50 text-textColor lg:w-10/12 md:text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            temporibus quia dolores ea mollitia id eveniet magnam odit ullam
            impedit enim dolore, ipsa ducimus accusantium quae cum at nihil
            similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quibusdam temporibus quia dolores ea mollitia id eveniet magnam odit
            ullam impedit enim dolore, ipsa ducimus accusantium quae cum at
            nihil similique. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="grid items-center w-full gap-5 lg:grid-cols-2 place-items-center xl:gap-20 md:gap-10">
          <Picture
            src="/static/images/about.png"
            alt="spa life"
            width={500}
            //   height={200}
            //   priority={true}
            className="object-cover w-full h-auto"
          />
          <div className="w-full space-y-6 text-left text-textColor">
            <p className="text-4xl font-bold uppercase">Lorem ipsum text</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores reprehenderit cum necessitatibus? Ut eos dolor ex
              reiciendis nihil delectus, distinctio obcaecati voluptate deserunt
              mollitia eaque magnam totam odit saepe exercitationem. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Asperiores
              reprehenderit cum necessitatibus? Ut eos dolor ex reiciendis nihil
              delectus, distinctio obcaecati voluptate deserunt mollitia eaque
              magnam totam odit saepe exercitationem. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Asperiores reprehenderit cum
              necessitatibus? Ut eos dolor ex reiciendis nihil delectus,
              distinctio obcaecati voluptate deserunt mollitia eaque magnam
              totam odit saepe exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa et
              quae quisquam iusto, dolorum commodi recusandae fugit, veniam,
              illo a est deserunt blanditiis dolorem omnis accusamus deleniti
              dicta maiores. Similique.
            </p>
          </div>
        </div>
        <div className="grid items-center w-full gap-5 lg:grid-cols-2 place-items-center xl:gap-20 md:gap-10">
          <Picture
            src="/static/images/about.png"
            alt="spa life"
            width={500}
            //   height={200}
            //   priority={true}
            className="object-cover w-full h-auto lg:hidden"
          />
          <div className="w-full space-y-6 text-left text-textColor">
            <p className="text-4xl font-bold uppercase">Lorem ipsum text</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores reprehenderit cum necessitatibus? Ut eos dolor ex
              reiciendis nihil delectus, distinctio obcaecati voluptate deserunt
              mollitia eaque magnam totam odit saepe exercitationem. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Asperiores
              reprehenderit cum necessitatibus? Ut eos dolor ex reiciendis nihil
              delectus, distinctio obcaecati voluptate deserunt mollitia eaque
              magnam totam odit saepe exercitationem. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Asperiores reprehenderit cum
              necessitatibus? Ut eos dolor ex reiciendis nihil delectus,
              distinctio obcaecati voluptate deserunt mollitia eaque magnam
              totam odit saepe exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa et
              quae quisquam iusto, dolorum commodi recusandae fugit, veniam,
              illo a est deserunt blanditiis dolorem omnis accusamus deleniti
              dicta maiores. Similique.
            </p>
          </div>
          <Picture
            src="/static/images/about.png"
            alt="spa life"
            width={500}
            //   height={200}
            //   priority={true}
            className="hidden object-cover w-full h-full lg:block"
          />
        </div>
      </div> */}
    </div>
  );
};

export default AboutUsPage;
