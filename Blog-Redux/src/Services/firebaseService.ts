import { fbConfig } from "../Api/Config/firebaseConfig";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getDatabase } from "firebase/database";

export const auth = getAuth(fbConfig);
export const db = getDatabase(fbConfig);

