//$httpClient.post(params,callbackfunction(error,response,data))
function Post_Data()
{
    var ninebot
    {
        url:"https://api5-h5-app-bj.ninebot.com/h5/v5_plus/sign/sign_home_page",
        headers:
        {
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Segway V5 C 507040000",
            Authorization:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGMyNWMwN2EyYzU0NDkyODFjNjA5YzE0N2FhMzliZCIsInJlZ19kYXRlIjoxNjAyNDY2NDk3LCJhdWQiOlsiaW90LXdlYmFwcCJdLCJhcmVhQ29kZSI6Ijg2IiwiYXVkaWVuY2UiOiJtb2JpbGUiLCJ1c2VyX25hbWUiOiJmaXNoemEiLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY2NzQzMTkxNywianRpIjoiZDM0M2NiM2ItYjYyYy00Mjc5LWJkZmEtNGY5OGFjZjUzNTU0IiwiZW1haWwiOiJsaXdlaXNwQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6ImFwcF92ZWhpY2xlIn0.lBN0BJeJBXyx7AmosmwGD4SxBAl88ZtDgGY8GC8ojZBCizXM1JeBX0iFw8_lhNNj8WX_WexUXUgzeNHQg4aBGZT8az1Wii69mFMlkGDQ1wn7UHczxXy2jbMCXMkBjiMr24REnquqFxVm011JbxZ9ozEJ165m34Kaixw6Br-zvLs",
            Cookies:"nb_session=h3sen53b0e2l501vdfgmlnvt7e42qlq9",
            Connection:"keep-alive",
            Origin:"https://api5-h5-app-bj.ninebot.com",
             //...
        },
        body:"ExampleBodyMessage"
    }
    $httpClient.post(ninebot,function(error,response,data)
    {
        var StatusCode,ResponseHeaders;
        StatusCode = response.status;
        ResponseHeaders = response.headers;
        console.log(response);
        console.log(StatusCode);//400
        console.log(ResponseHeaders);//Object
        console.log(error);
        console.log(data);
        console.log(Json.parse(data));//if data is Json String
        //Loon支持使用Console.log输出调试信息
    })
}
}
