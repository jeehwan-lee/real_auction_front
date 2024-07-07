import React from "react";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import { MdPeopleAlt } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

function AuctionInfo() {
  return (
    <Flex
      direction="flex-col"
      justify="justify-start"
      classNameProps="bg-white shadow-md fixed top-0 z-50 w-full max-w-[430px] justify-between flex py-2 px-4 items-center"
    >
      <Flex
        direction="flex-row"
        justify="justify-between"
        classNameProps="w-full"
      >
        <Text label="목록" color="gray-400" size="sm"></Text>
        <Flex direction="flex-row" justify="justify-end" classNameProps="w-fit">
          <Text label="나가기" color="gray-400" size="sm"></Text>
          <FaChevronRight color="gray" size={10} />
        </Flex>
      </Flex>
      <div className="h-[4px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-start"
        classNameProps="w-full"
      >
        <img
          className="rounded-lg w-[80px] h-[80px] object-cover "
          src="https://real-auction.s3.ap-southeast-2.amazonaws.com/image/profile/defaultImage"
        />
        <div className="w-[20px]"></div>
        <Flex
          direction="flex-col"
          justify="justify-start"
          align="items-start"
          classNameProps="w-full"
        >
          <Text label="자동차" color="black" size="base"></Text>
          <div className="h-[2px]"></div>
          <Text label={`시작가 10000원`} color="gray-400" size="sm"></Text>
          <div className="h-[2px]"></div>
          <Flex direction="flex-row" classNameProps="w-full">
            <Text
              label={`24.06.10.(수) 마감`}
              color="gray-400"
              size="sm"
            ></Text>
            <Flex direction="flex-row">
              <MdPeopleAlt color="gray" />
              <div className="w-[4px]"></div>
              <Text label="10" color="gray-400" size="sm"></Text>
            </Flex>
          </Flex>
          <div className="h-[2px]"></div>
        </Flex>
      </Flex>
      <div className="h-[4px]"></div>
      <Flex direction="flex-row" justify="justify-end" classNameProps="w-full">
        <Text label="상세보기" color="gray-400" size="sm"></Text>
      </Flex>
    </Flex>
  );
}

export default AuctionInfo;
