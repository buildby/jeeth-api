import axios from "axios";

const MSG91_TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID;
const MSG91_AUTH_KEY = process.env.MSG91_AUTH_KEY;
const MSG91_URL = process.env.MSG91_URL;

export const sendOTP = async (phoneNumber: string, countryCode: string = "+91") => {
  const otpUrl = `${MSG91_URL}/otp?mobile=${countryCode}${phoneNumber}&template_id=${MSG91_TEMPLATE_ID}&authkey=${MSG91_AUTH_KEY}&otp_length=4`;
  return await axios.get(otpUrl);
}


export const sendDummyOTP = async (phoneNumber: string, countryCode: string = "+91") => {
  const otpUrl = `${MSG91_URL}/otp?mobile=${countryCode}${phoneNumber}&template_id=${MSG91_TEMPLATE_ID}&authkey=${MSG91_AUTH_KEY}&otp=1234`;
  return await axios.get(otpUrl);
}

export const resendOTP = async (phoneNumber: string, countryCode: string = "+91", type: string = "text") => {
  const retryUrl = `${MSG91_URL}/otp/retry?authkey=${MSG91_AUTH_KEY}&retrytype=${type}&mobile=${countryCode}${phoneNumber}`;
  return await axios.get(retryUrl);
}

export const verifyOTP = async (phoneNumber: string, otp: string, countryCode: string = "+91") => {
  const verifyUrl = `${MSG91_URL}/otp/verify?mobile=${countryCode}${phoneNumber}&authkey=${MSG91_AUTH_KEY}&otp=${otp}`;
  return await axios.get(verifyUrl);
}