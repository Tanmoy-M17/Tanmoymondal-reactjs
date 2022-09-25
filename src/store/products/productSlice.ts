import {
  // AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export type IproductItemsProps ={
  _id: string;
  name: string;
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  price: number;
  
}
export type ICategoryProps ={
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v:number;
}

type InitialState ={
  status:string
  products:IproductItemsProps[];
  category:ICategoryProps[];
  details:IproductItemsProps[];
  favourites:IproductItemsProps[];
}
export const Statues = Object.freeze({
  IDEL: "ok",
  ERROR: "error",
  LOADING: "loading",
});

const initialState : InitialState= {
  status: "ok", 
  products:[],
  category:[],
  details:[],
  favourites:JSON.parse(`${localStorage.getItem("Favourite")}`)||[]
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addTofavoutite: (state, action: PayloadAction<IproductItemsProps>) => {
      state.favourites.push(action.payload);
      localStorage.setItem("Favourite",JSON.stringify(state.favourites))
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(({ _id }) => _id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<IproductItemsProps[]>) => {
        state.products=action.payload;
        state.status = Statues.IDEL;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = Statues.ERROR ;
      })

      .addCase(fetchCategory.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action: PayloadAction<ICategoryProps[]>) => {
        state.category=action.payload;
        state.status = Statues.IDEL;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = Statues.ERROR ;
      })
      .addCase(fetchDetails.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(fetchDetails.fulfilled, (state, action: PayloadAction<IproductItemsProps[]>) => {
        state.details=action.payload;
        state.status = Statues.IDEL;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = Statues.ERROR ;
      })
  },
});

export const fetchProduct = createAsyncThunk("product/fetch",() => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbm1veW1vbmRhbDE3ZUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vVGFubW95LU0xNyIsImlhdCI6MTY2NDAwNzUzMywiZXhwIjoxNjY0NDM5NTMzfQ.aNS83Mrugnsqlg_8fav_BphDUyHnykZXV8Yr3fiYOJY",
    },
  };
  return axios
    .get("https://upayments-studycase-api.herokuapp.com/api/products", config)
    .then((res) => {
      console.log(res.data);
      return res.data.products;
    });
});

 export const fetchCategory = createAsyncThunk("categoty/fetch",() => {
      let config = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbm1veW1vbmRhbDE3ZUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vVGFubW95LU0xNyIsImlhdCI6MTY2NDAwNzUzMywiZXhwIjoxNjY0NDM5NTMzfQ.aNS83Mrugnsqlg_8fav_BphDUyHnykZXV8Yr3fiYOJY",
        },
      };
      return axios
        .get("https://upayments-studycase-api.herokuapp.com/api/categories",config)
        .then((res) => {
          return res.data.categories;
      });
    });
    export const fetchDetails = createAsyncThunk("details/fetch",async (id: string) => {
      let config = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbm1veW1vbmRhbDE3ZUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vVGFubW95LU0xNyIsImlhdCI6MTY2NDAwNzUzMywiZXhwIjoxNjY0NDM5NTMzfQ.aNS83Mrugnsqlg_8fav_BphDUyHnykZXV8Yr3fiYOJY",
        },
      };
      const res = await axios
        .get(`https://upayments-studycase-api.herokuapp.com/api/products/${id}`, config);
      return res.data.product
      ;
    });
   export const {removeProduct , addTofavoutite} =productSlice.actions;
export default productSlice.reducer