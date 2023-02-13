import React, {Component, useState} from 'react';
import Link from 'next/link';
import {SubmitHandler, useForm} from "react-hook-form";
import {register as registerD} from "../../lib/api-auth";
import useUser from "../../data/useUser";
import Router from "next/router";
import {AxiosError} from "axios";


const Register = ()=> {

    let publicUrl = process.env.PUBLIC_URL + '/'
  type Inputs = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
  };
  const {isLoggedIn, mutate} = useUser();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const [serverError, setServerError] = useState('');
  const onSubmit: SubmitHandler<Inputs> = async data => {
    setServerError('');
    let {success, error} = await registerD({username: data.email, password: data.password, email: data.email, firstname: data.firstName, lastname: data.lastName })
    if(success) {
      await mutate();
      Router.replace('/')
    }
    else if(error){

      if(error.response?.status === 400){
        if(error.response.data.message==='Failed! Username is already in use!'){
          setServerError('Данный Электронный адрес уже используется, воспользуйтесь другим')
        }
      }
    }

  };

    return ( <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">Зарегистрироваться</h1>
              <p>Пройдите регистрацию и получите бонусы</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              {serverError &&
                  <div className="alert alert-danger text-center" role="alert">
                    {serverError}
                  </div>}
              <form action="#" className="ltn__form-box contact-form-box" onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder="Имя" {...register('firstName')}/>
                <input type="text" placeholder="Фамилия" {...register('lastName')}/>
                <input type="text" placeholder="Электронная почта*" {...register('email')}/>
                <input type="password" {...register('password')} placeholder="Пароль*"/>
                <input type="password" {...register('confirmPassword', {required: true,
                  validate: (val: string) => {
                    if (watch('password') != val) {
                      return "Your passwords do no match";
                    }
                  },})} placeholder="Подтвердите пароль*"/>
                <label className="checkbox-inline">
                  <input type="checkbox" required/> &nbsp;
                  Нажимая на "СОЗДАТЬ АККАУНТ", Я принимаю правила конфиденциальности.
                </label>
                <div className="btn-wrapper">
                  <button className="theme-btn-1 btn reverse-color btn-block" type="submit">СОЗДАТЬ АККАУНТ</button>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>Создав аккаунт вы принимаете наши:</p>
                <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
                <div className="go-to-btn mt-50 go-top">
                  <Link href="/src/pages/login/index">У вас есть аккаунт? ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Register
