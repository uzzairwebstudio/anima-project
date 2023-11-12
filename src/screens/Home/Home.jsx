import React from "react";
import { EmailText } from "../../components/EmailText";
import { Hashtag } from "../../components/Hashtag";
import { HeroText } from "../../components/HeroText";
import { Rectangle } from "../../components/Rectangle";
import { Skill } from "../../components/Skill";
import { SkillsTitle } from "../../components/SkillsTitle";
import { Status } from "../../components/Status";
import { TopMenuLink } from "../../components/TopMenuLink";
import { UwsLogo } from "../../icons/UwsLogo";

export const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1512px] h-[3116px] relative">
        <div className="absolute w-[1512px] h-[654px] top-[126px] left-0 bg-white border-b [border-bottom-style:solid] border-gray-600">
          <div className="absolute w-[126px] h-[126px] top-[54px] left-[126px] bg-[url(https://c.animaapp.com/s3m834bx/img/profile-1@2x.png)] bg-cover bg-[50%_50%]">
            <Status className="!relative !left-[94px] !top-[7px]" property1="idle" />
          </div>
          <div className="absolute w-[628px] h-[61px] top-[214px] left-[397px] bg-yellow-400" />
          <HeroText
            className="!absolute !left-[125px] !top-[213px]"
            divClassName="!whitespace-nowrap"
            text="Hi, I&#39;m Uzzair. Software Engineer and Designer based in Malaysia. This year marks my 14th year building and wrecking things in web space. Currently the acting Technical Lead of a Fintech startup. Running Uzzair Web Studio, my digital agency on the side which focuses on branding and software development."
          />
          <div className="inline-flex items-start gap-[38px] absolute top-[549px] left-[125px]">
            <Hashtag className="!w-[170px]" text="#webdeveloper" />
            <Hashtag className="!w-[121px]" text="#startuplife" />
            <Hashtag className="!w-[161px]" text="#digitalagency" />
            <Hashtag className="!w-[155px]" text="#technicallead" />
            <Hashtag className="!w-[101px]" text="#dadbod" />
          </div>
        </div>
        <div className="absolute w-[1517px] h-[484px] top-[802px] left-0 bg-white border-b [border-bottom-style:solid] border-gray-600">
          <p className="absolute w-[470px] top-[45px] left-[125px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-black text-[40px] tracking-[0] leading-[64px]">
            Some of the brands I’ve worked with
          </p>
          <div className="flex flex-wrap w-[811px] h-[382px] items-center justify-center gap-[61px_61px] absolute top-[46px] left-[629px]">
            <img
              className="relative w-[89.17px] h-[70px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background@2x.png"
            />
            <img
              className="relative w-[112.79px] h-[80px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-1@2x.png"
            />
            <img
              className="relative w-[176.16px] h-[80px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-2@2x.png"
            />
            <img
              className="relative w-[208.56px] h-[70px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-3@2x.png"
            />
            <img
              className="relative w-[163.64px] h-[80px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-4@2x.png"
            />
            <img
              className="relative w-[217.39px] h-[50px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-5@2x.png"
            />
            <img
              className="relative w-[73.4px] h-[109.91px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-6@2x.png"
            />
            <img
              className="relative w-[160.14px] h-[50px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-7@2x.png"
            />
            <img
              className="relative w-[221.88px] h-[50px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-8@2x.png"
            />
            <img
              className="relative w-[321.21px] h-[40px]"
              alt="Background"
              src="https://c.animaapp.com/s3m834bx/img/background-9@2x.png"
            />
          </div>
        </div>
        <div className="absolute w-[1512px] h-[126px] top-0 left-0">
          <div className="inline-flex flex-col items-start gap-[10px] relative">
            <Rectangle className="!h-[126px] !relative" />
            <div className="flex w-[1270px] items-start gap-[331px] absolute top-[47px] left-[126px]">
              <UwsLogo className="!relative !w-[48px] !h-[32.76px]" />
              <div className="flex items-start justify-end gap-[56px] relative flex-1 grow">
                <TopMenuLink
                  className="!w-[73px]"
                  divClassName="!w-[107px]"
                  property1="default"
                  topMenuLinkTitle="About"
                />
                <TopMenuLink
                  className="!w-[102px]"
                  divClassName="!w-[150px]"
                  property1="default"
                  topMenuLinkTitle="Branding"
                />
                <TopMenuLink
                  className="!w-[65px]"
                  divClassName="!w-[95px]"
                  property1="default"
                  topMenuLinkTitle="Web"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1517px] h-[688px] top-[2352px] left-0 bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-gray-600">
          <div className="absolute w-[619px] h-[61px] top-[250px] left-[445px] bg-yellow-400" />
          <div className="absolute w-[998px] h-[184px] top-[251px] left-[256px]">
            <HeroText
              className="!absolute !left-[194px] !w-[611px] !top-0"
              divClassName="!whitespace-nowrap !w-[unset]"
              text="I’m available for work. Let’s talk?"
            />
            <EmailText className="!absolute !left-0 !w-[998px] !top-[120px]" text="hello@uzzairwebstudio.com" />
          </div>
        </div>
        <p className="absolute w-[525px] top-[1359px] left-[114px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-black text-[42px] tracking-[0] leading-[64px]">
          Tools and Technology I Use
        </p>
        <div className="inline-flex flex-col items-start gap-[40px] absolute top-[1498px] left-[114px]">
          <div className="flex w-[1269px] items-start gap-[151px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <SkillsTitle text="HTML &amp; CSS" />
              <Skill className="!w-[176px]" text="Bootstrap" />
              <Skill className="!w-[176px]" text="TailwindCSS" />
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <SkillsTitle text="PHP" />
              <Skill className="!w-[176px]" text="Laravel" />
              <Skill className="!w-[176px]" text="Wordpress" />
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <SkillsTitle text="JavaScript" />
              <Skill className="!w-[176px]" text="AlpineJS" />
              <Skill className="!w-[176px]" text="NextJS" />
              <Skill className="!w-[176px]" text="ReactJS" />
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <SkillsTitle text="Database" />
              <Skill className="!w-[176px]" text="MongoDB" />
              <Skill className="!w-[176px]" text="MySQL" />
              <Skill className="!w-[176px]" text="PostgreSQL" />
            </div>
          </div>
          <div className="inline-flex items-start gap-[147px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <SkillsTitle text="Design" />
              <Skill className="!w-[176px]" text="Affinity Designer" />
              <Skill className="!w-[176px]" text="Figma" />
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <SkillsTitle text="Deployment" />
              <Skill className="!w-[176px]" text="AliBaba Cloud" />
              <Skill className="!w-[176px]" text="Digital Ocean" />
              <Skill className="!w-[176px]" text="Ploi.io" />
              <Skill className="!w-[176px]" text="Railwayapp" />
              <Skill className="!w-[176px]" text="Vercel" />
            </div>
          </div>
        </div>
        <Skill className="!absolute !left-[538px] !w-[437px] !top-[3045px]" text="Copyright Uzzair Baharudin . 2023" />
      </div>
    </div>
  );
};
