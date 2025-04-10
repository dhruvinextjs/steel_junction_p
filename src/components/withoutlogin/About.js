import React from "react";
import Picture from "../ui/picture";

const AboutWithOutLogin = () => {
  return (
    <div className="w-full space-y-5 md:space-y-10">
        <p className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">About US</p>
      <div
        // dangerouslySetInnerHTML={{ __html: content?.content }}
        className="lg:space-y-14 space-y-7 container mx-auto md:px-10 px-5 w-full"
      >
        <div className="w-full grid lg:grid-cols-2 place-items-center items-center xl:gap-20 md:gap-10 gap-5">
          <div className="w-full text-left text-textColor space-y-6">
            <p className="uppercase font-bold text-4xl">Lorem ipsum text</p>
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
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWithOutLogin;
