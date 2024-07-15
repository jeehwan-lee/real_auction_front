import { CreateAuctionInfo } from "../models/auction";
import { autnInstance, defaultInstance } from "../utils/instance";

export const createAuction = async (createAuctionInfo: CreateAuctionInfo) => {
  try {
    const { data } = await defaultInstance.post(
      "/auction/create",
      createAuctionInfo
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAuctionList = async (searchParam: string, page: number) => {
  try {
    const { data } = await defaultInstance.get(
      `/auction/list?search=${searchParam}&page=${page}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAuctionListBySearchParam = async (searchParam: string) => {
  try {
    const { data } = await defaultInstance.get(`/auction/list/${searchParam}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMyAuctionList = async (userId: number, page: number) => {
  try {
    const { data } = await defaultInstance.get(
      `/auction/list/myAuction/${userId}?page=${page}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAuctionByAuctionId = async (auctionId: number) => {
  try {
    const { data } = await defaultInstance.get(`/auction/${auctionId}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
