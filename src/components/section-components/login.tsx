import React, {Component, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {SubmitHandler, useForm} from "react-hook-form";
import {login} from "../../lib/api-auth";
import useUser from "../../data/useUser";
import Router from "next/router";


const Login = function () {
    const [isFormDisabled, setIsFormDisabled] = useState(false);
    let publicUrl = process.env.PUBLIC_URL + '/'
    type Inputs = {
      username: string,
      password: string,
    };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const {  loading,
    isLoggedIn,
    user,
    mutate,} = useUser();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    setIsFormDisabled(true);
    const {success, error} = await login({username: data.username, password: data.password})
    if(success) {
      console.log('suc',success);
      await mutate();
      Router.replace('/')
    }
    else{
      console.log('err', error);
    }
    setIsFormDisabled(false);
  };

  return (
    <div>
      <div className="ltn__login-area pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">С возвращением</h1>
                <p>Для входа в аккаунт введите свой логин и пароль.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form method="GET" className="ltn__form-box contact-form-box" onSubmit={handleSubmit(onSubmit)}>

                  <input type="email" placeholder="Электронная почта*" {...register("username", {required: true})}  />
                  <input type="password" placeholder="Пароль*" {...register("password", {required: true})}/>
                  <div className="btn-wrapper mt-0">
                    <button className="theme-btn-1 btn btn-block" type="submit" disabled={isFormDisabled}>ВОЙТИ</button>
                  </div>
                  <div className="go-to-btn mt-20">
                    <a href="#" title="Forgot Password?" data-bs-toggle="modal"
                       data-bs-target="#ltn_forget_password_modal"><small>ЗАБЫЛИ ПАРОЛЬ?</small></a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create pt-3">
                <h4>ЕЩЕ НЕ УСПЕЛИ СОЗДАТЬ АККАУНТ?</h4>

                <p>Возможности с аккаунтом</p>
                <ul>
                  <li>Сохранять интересующие проекты</li>
                  <li>Инвестрировать в проекты</li>
                  <li>Получать доступ к закрытым торгам</li>
                  <li>Доступ в систему лояльности</li>
                </ul>
                <div className="btn-wrapper go-top ">
                  <Link href="/register" className="theme-btn-1 btn black-btn">СОЗДАТЬ АККАУНТ</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>)

}

export default Login
