# 기획서
## EDCAN - 20616 이창학

---------

1. 제목 : 하루 확인

2. 주제 : 하루마다 아침에 이 앱을 사용함으로써 오늘의 할일을 알아가고 해나아 가는 것이 목표입니다.

3. 작품 설명 : 맨 위에 날씨확인이 가능하여 하루의 상태를 확인하여 그 밑에 있는 TodoList를 사용하여 오늘 할 일을 정리하고 완료하여 완료버튼을 누루면 됩니다.
4. 기능 설명 : 

![Project_View](https://user-images.githubusercontent.com/67543254/130411832-40952743-9ab0-4f6e-899f-d7f4753ca2ee.png)
* TextInput : Input
  * TodoList에 내요을 적을 수 있습니다.
* 날씨 확인 : View
   (API : OpenWeatehrMap)
  * 현재 지금의 날씨상태와 온도를 보여줍니다. 날씨 상태에 따라 아이콘이 바뀝니다.
* 확인 버튼 : Button
  * 일을 해결 했을 경우 클릭하여 완료표시를 합니다. 텍스트와 아이콘이 바뀌게 됩니다.
* 추가 버튼 : Button
  * TodoList에 내용을 추가 할 수 있습니다.
* ScrollView : View
  * TodoList에 내용이 화면 밖에 넘어갈 시 Scroll을 할 수 있습니다.
* 삭제 버튼 : Button
  * TodoList에 내용을 삭제 할 수 있습니다.  

-----

아쉬운 점 : 
* 앱을 껏다 킬시 TodoList내용이 지워진다.
* UI가 전체적으로 아쉽다. (특히 색)
* StatusBar를 사용을 못했다.
* 시간기능을 추가하고 그에 맞게 알람메시지가 왔으면 좋겠다.

Made By React-Native
