import React from "react";
import Flex from "../shared/Flex";
import Text from "../shared/Text";

function NoticeItem() {
  return (
    <Flex
      direction="flex-row"
      classNameProps="bg-white rounded-lg pt-4 pb-4 px-4 my-2"
    >
      <Flex
        direction="flex-row"
        justify="justify-start"
        classNameProps="w-full"
      >
        <img
          className="rounded-full w-[60px] h-[60px] object-cover "
          src="https://real-auction.s3.ap-southeast-2.amazonaws.com/upload/1719932369672"
        />
        <div className="w-[20px]"></div>
        <Flex
          direction="flex-row"
          justify="justify-between"
          classNameProps="w-full"
        >
          <Flex
            direction="flex-col"
            justify="justify-start"
            align="items-start"
            classNameProps="w-full"
          >
            <Text label="경매 개시" color="black" size="sm" bold={true}></Text>
            <div className="h-[2px]"></div>
            <Text label="BMW 자동차" color="black" size="sm"></Text>
            <div className="h-[2px]"></div>
            <Text label="1시간 전" color="gray-400" size="sm"></Text>
            <div className="h-[2px]"></div>
          </Flex>
          <img
            className="rounded-lg w-[120px] h-[60px] object-cover "
            src="https://real-auction.s3.ap-southeast-2.amazonaws.com/upload/1719932369672"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NoticeItem;