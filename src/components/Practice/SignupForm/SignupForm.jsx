import { useEffect, useState } from "react";

function SignupForm() {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState({});
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		const newErrors = {}
		//유효성 검사
		//만약에 email @가 없다 => error email = "이메일 형식에 어쩌구~~"
		newErrors.email = "이메일 형식에 어쩌구~~"
	}, [formValues]);
	return (
		<div>
			<div>
				<input type="email" />
			</div>
			<div>
				<input type="password" />
			</div>
			<button>가입하기</button>
		</div>
	);
}

export default SignupForm;

//이메일 인풋에 입력이 될때 유효성 검사 실시
//골뱅이 포함 여부에 따라서 없으면 에러메시지로
//"이메일 형식에 맞게 입력해주세요." 출력
//비밀번호 인풋에 입력이 될때 유효성 검사 실시
//8자리 이상인지 여부에 따라서 안되면 에러메시지로
//"비밀번호는 8자리 이상이어야 합니다." 출력
//에러메시지가 아예 없으면 버튼 활성화 하나라도 있으면 비활
//버튼을 누르면 alert 가입이 되었습니다
