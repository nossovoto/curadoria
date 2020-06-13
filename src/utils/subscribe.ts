//
// TODO implementar subscription direto no mailchimp, precisa ser enviado pelo backend
// por causa do Cross Site Reference - CSF
//

import axios from "axios"

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const LIST_ID = process.env.LIST_ID
const REGION_NAME = process.env.REGION_NAME
const URL = `https://${REGION_NAME}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`

const options = {
  headers: {
    Authorization: `apikey ${MAILCHIMP_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

export default function mailchimpSubscribe(email: string) {
  const user = {
    status: "subscribed", // Tell Mailchimp to subscribe this email
    email_address: email // Note that Mailchimp takes an email_address field, not just email
  }
  return axios.post(URL, user, options)
}
