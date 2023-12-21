## Amazon Connect
- 옴니채널 클라우드 콜센터
  - 옴니채널 : 음성 및 채팅과 같은 여러 통신 채널에서 통합된 고객 환경 제공
<br/></br>

## 기본 시나리오
- 고객 : 통화 시작 --> 전화번호 확인 --> 등록된 번호라면 CRM 확인 --> 고객 환경 텍스트를 이용해 읽어줌 --> 고객 : 발화 시작 --> 예약 시작
<br/></br>

## 장점
- 다양한 AWS 서비스와 연동 가능
- 모든 데이터를 무제한으로 S3에 저장 가능
- 고객 응대 흐름에서 원하는 데이터 가져오고 보낼 수 있음
<br/></br>

## 플로우 블록
- 고객 입력 가져오기 : 고객 의도를 기반으로 분기
  - 고객으로부터 응답을 얻기 위해 프롬프트 재생
  - 고객이 DTMF(Dual Tone Multi Frequency) 입력
  - 고객의 입력을 기반으로 분기
  - ※ Amazon Lex를 사용하는 경우에만 채팅 사용 가능
- 프롬프트 재생
  - 중단 가능한 오디오 프롬프트 재생
  - text-to-speech 메시지 전달
  - 채팅 응답 전달
- 흐름으로 전송 : 고객을 다른 흐름으로 안내
- 흐름 종료/다시 시작 : 고객 응대를 연결해지 하지 않고, 현재 흐름 종료
<br/></br>

## 흐름 생성하기

## 실제 전화번호와 연동하기
- https://[connect주소].my.connect.aws/contact-flows/edit?id=arn:aws:connect:ap-northeast-1:[계정Id]:instance/[InstanceId]/contact-flow/[ContactFlowId]
- [lambda 코드](https://github.com/chomming/aws-connect/blob/main/index.js)
