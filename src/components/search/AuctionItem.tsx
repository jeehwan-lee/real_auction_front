import React, { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import { MyAuctionInfo } from "../../models/auction";

function AuctionItem() {
  return (
    <Flex
      direction="flex-col"
      classNameProps="bg-white rounded-lg pt-4 pb-2 px-4 hover:cursor-pointer my-4"
    >
      <Flex direction="flex-row" justify="justify-start">
        <img
          className="rounded-lg w-1/4 h-1/4 object-cover "
          src="https://real-auction.s3.ap-southeast-2.amazonaws.com/upload/1719932369672"
        />
        <div className="w-[14px]"></div>
        <Flex
          direction="flex-col"
          justify="justify-start"
          align="items-start"
          classNameProps="w-full"
        >
          <Text label="BMW 자동차" color="black" size="base"></Text>
          <div className="h-[2px]"></div>
          <Text label="시작가 3,000,000원" color="gray-400" size="sm"></Text>
          <div className="h-[2px]"></div>
          <Flex direction="flex-row" classNameProps="w-full">
            <Text
              label="7.24.(수) 17:30 마감"
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
      <Flex direction="flex-row" justify="justify-end" classNameProps="w-full">
        <Text label="참여하기 " color="gray-400" size="sm"></Text>
        <div className="w-[4px]"></div>
        <FaChevronRight color="gray" size={10} />
      </Flex>
    </Flex>
  );
}

export default AuctionItem;
