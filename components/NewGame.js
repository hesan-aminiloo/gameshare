import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Link from 'next/link';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';


const schema = Joi.object({
  owner: Joi
    .string()
    .required()
    .messages({
      'string.empty': `اینو که نباید خالی بزاری`,
      'any.required': `اینو پر کن`,
    }),

  game_name: Joi
    .string()
    .required()
    .messages({
      'string.empty': `اینو که نباید خالی بزاری`,
      'any.required': `اینو پر کن`,
    }),

  phone: Joi
    .string()
    .required()
    .messages({
      'string.empty': `اینو که نباید خالی بزاری`,
      'any.required': `اینو پر کن`,
    }),

  pic: Joi
    .string()
    .allow('')
    .optional(),

  description: Joi
    .string()
    .allow('')
    .optional(),

  latlng: Joi
    .object()
    .required()
})

const NewGame = () => {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm({
    reValidateMode: 'onChange',
    resolver: joiResolver(schema)
  });
  const col = collection(db, 'ads');
  console.log("🚀 ~ file: NewGame.js ~ line 54 ~ NewGame ~ col", col.firestore.app)
  // const d = useCollectionData();

  const proceed = async () => {
    try {
      const docRef = await addDoc(collection(db, "ads"), {
        name: "Ada",
        number: "Lovelace",
        owner: 1815,
        pic: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // useEffect(() => {
  //   const test = async () => {
  //     const col = await collection(db, 'ads');
      
  //     console.log("🚀 ~ file: NewGame.js ~ line 55 ~ test ~ col", col)
  //   };
  //   test();
  // }, []);
  
  return (
    <div className="h-3/4 min-w-50 bg-white absolute right-7 top-0 bottom-0 m-auto p-8 w-1/3 rounded-xl shadow-md">
      <h1 className="text-xl mb-2 text-right font-bold">ثبت بازی جدید</h1>
      <p className="text-gray text-right mb-6 text-xs leading-5 text-gray-400">
        توی وارد کردن اطلاعاتتون دقت کنید! اگه کسی بازی شما رو دوست داشت میخواد با شما تماس بگیره.
      </p>

      <form onSubmit={handleSubmit(proceed)}>
        <div className="mb-6 text-right">
          <label htmlFor="game_name" className="block mb-2 text-gray-500 text-sm">اسم بازی</label>
          <input
            id="game_name"
            type="text"
            className={`ring-1 font-light p-2 px-4 rounded w-full bg-gray-50 ring-gray-200 ${errors.game_name && 'ring-red-400'}`}
            placeholder="Assassins creed"
            {...register('game_name')}
          />
          {errors.game_name && (
            <span className="text-red-500 text-xs py-2 block">
              {errors.game_name.message}
            </span>
          )}
        </div>
        <div className="mb-6 text-right">
          <label htmlFor="owner" className="block mb-2 text-gray-500 text-sm">اسم شما</label>
          <input
            id="owner"
            type="text"
            className={`ring-1 font-light p-2 px-4 rounded w-full bg-gray-50 ring-gray-200 ${errors.owner && 'ring-red-400'}`}
            placeholder="انجلینا جولی"
            {...register('owner')}
          />
          {errors.owner && (
            <span className="text-red-500 text-xs py-2 block">
              {errors.owner.message}
            </span>
          )}
        </div>
        <div className="mb-6 text-right">
          <label htmlFor="phone" className="block mb-2 text-gray-500 text-sm">شماره تماس</label>
          <input
            id="phone"
            type="text"
            className={`ring-1 p-2 font-light px-4 rounded w-full bg-gray-50 ring-gray-200 ${errors.phone && 'ring-red-400'}`}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            {...register('phone')}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs py-2 block">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div className="mb-6 text-right">
          <span className="block mb-2 text-gray-500 text-sm">عکس بازی</span>
          <label htmlFor="pic" className="border-dashed border-4 p-10 block text-center bg-gray-50 rounded-md text-gray-300 cursor-pointer font-bold">آپلود</label>
          <input
            id="pic"
            type="file"
            className="hidden ring-1 p-2 px-4 rounded w-full bg-gray-50 ring-gray-200"
            {...register('pic')}
          />
          {errors.pic && (
            <span className="text-red-500 text-xs py-2 block">
              {errors.pic.message}
            </span>
          )}
        </div>
        <div className="flex">
          <button className="flex-1 w-full p-3 mt-10 text-center rounded-md text-sm hover:underline">
            انصراف
          </button>
          <button className="flex-1 w-full p-2 mt-10 text-center text-white bg-green-500 hover:bg-green-600 rounded-md text-sm">
            ثبت
          </button>
        </div>
      </form>
    </div>
  )
};

export default NewGame;
