import React, { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import { AuctionInfo } from "../../models/auction";
import dayjs from "dayjs";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

interface MyAuctionItemProps {
  myAuction: AuctionInfo;
}

function MyAuctionItem({ myAuction }: MyAuctionItemProps) {
  const { name, startPrice, endDate, photoUrl, attendances } = myAuction;

  return (
    <Flex
      direction="flex-row"
      classNameProps="bg-white rounded-lg pt-4 pb-4 px-4 hover:cursor-pointer mb-2"
    >
      <Flex
        direction="flex-row"
        justify="justify-start"
        classNameProps="w-full"
      >
        <img
          className="rounded-lg w-[90px] h-[90px] object-cover "
          src={photoUrl}
        />
        <div className="w-[20px]"></div>
        <Flex
          direction="flex-col"
          justify="justify-start"
          align="items-start"
          classNameProps="w-full"
        >
          <Text label={name} color="text-black" size="text-base"></Text>
          <div className="h-[2px]"></div>
          <Text
            label={`시작가 ${priceFormatter(startPrice)}원`}
            color="text-gray-400"
            size="text-sm"
          ></Text>
          <div className="h-[2px]"></div>
          <Flex direction="flex-row" classNameProps="w-full">
            <Text
              label={`${dateFormatter(endDate)} 마감`}
              color="text-gray-400"
              size="text-sm"
            ></Text>
            <Flex direction="flex-row">
              <MdPeopleAlt color="gray" />
              <div className="w-[4px]"></div>
              <Text
                label={attendances.length.toString()}
                color="text-gray-400"
                size="text-sm"
              ></Text>
            </Flex>
          </Flex>
          <div className="h-[2px]"></div>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MyAuctionItem;
