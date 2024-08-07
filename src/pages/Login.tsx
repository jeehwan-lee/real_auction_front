import React, { KeyboardEvent, useState } from "react";
import Input from "../components/shared/Input";
import Spacing from "../components/shared/Spacing";
import Button from "../components/shared/Button";
import Flex from "../components/shared/Flex";
import { Link, useNavigate } from "react-router-dom";
import Text from "../components/shared/Text";
import { LoginInfo } from "../models/login";
import { login } from "../apis/login";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../store/atom/user";

function Login() {
  const setUser = useSetRecoilState(userAtom);

  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  const onChange = (e: { target: { name: any; value: any } }) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async () => {
    try {
      const response = await login(loginInfo);
      const loggedUser = {
        id: response.id,
        email: response.email,
        name: response.name,
        photoUrl: response.photoUrl,
      };

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      setUser(loggedUser);

      navigate("/");
    } catch (error) {
      alert("아이디와 비밀번호를 확인하세요");
    }
  };

  return (
    <div className="my-auto">
      <Text label="로그인" color="text-black" size="text-xl" bold={true} />
      <div className="h-[24px]"></div>
      <Input
        placeholder="이메일"
        name="email"
        value={loginInfo.email}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="h-[24px]"></div>
      <Input
        placeholder="비밀번호"
        name="password"
        value={loginInfo.password}
        onChange={onChange}
        type="password"
        onKeyDown={onKeyDown}
      />
      <div className="h-[24px]"></div>
      <Button label="로그인" onClick={() => onSubmit()} />
      <div className="h-[10px]"></div>
      <Flex direction="flex-row">
        <Text
          label="아직 계정이 없으신가요?"
          color="text-gray-400"
          size="text-base"
        />
        <Link to="/signUp">
          <Text label="회원가입" color="text-gray-600" size="text-base" />
        </Link>
      </Flex>
    </div>
  );
}

export default Login;
