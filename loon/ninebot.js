
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

/*

const url = `https://api5-h5-app-bj.ninebot.com/h5/v5_plus/sign/sign_home_page`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/json`,
'Origin' : `https://api5-h5-app-bj.ninebot.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Segway V5 C 507040000`,
'Authorization' : `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGMyNWMwN2EyYzU0NDkyODFjNjA5YzE0N2FhMzliZCIsInJlZ19kYXRlIjoxNjAyNDY2NDk3LCJhdWQiOlsiaW90LXdlYmFwcCJdLCJhcmVhQ29kZSI6Ijg2IiwiYXVkaWVuY2UiOiJtb2JpbGUiLCJ1c2VyX25hbWUiOiJmaXNoemEiLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY2NzQzMTkxNywianRpIjoiZDM0M2NiM2ItYjYyYy00Mjc5LWJkZmEtNGY5OGFjZjUzNTU0IiwiZW1haWwiOiJsaXdlaXNwQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6ImFwcF92ZWhpY2xlIn0.lBN0BJeJBXyx7AmosmwGD4SxBAl88ZtDgGY8GC8ojZBCizXM1JeBX0iFw8_lhNNj8WX_WexUXUgzeNHQg4aBGZT8az1Wii69mFMlkGDQ1wn7UHczxXy2jbMCXMkBjiMr24REnquqFxVm011JbxZ9ozEJ165m34Kaixw6Br-zvLs`,
'Cookie' : `nb_session=h3sen53b0e2l501vdfgmlnvt7e42qlq9`,
'Host' : `api5-h5-app-bj.ninebot.com`,
'Referer' : `https://api5-h5-app-bj.ninebot.com/h5Items/`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};
const body = `{"language":"zh-Hans-CN"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $notify("打卡成功",response.body)
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

