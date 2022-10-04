인강을 들으며, 간단한 과제를 푸는데 배열의 합을 구해야 할 상황이 생겼다.

내가 아는 배열:

var 뭐시기 = [1, 2, 3, 4, 5]
뭐시기[1] = 2
이런것...

내가 여지껏 배운 문법 중 for 과 forEach 을 활용해 합을 구할 수 있다.

for
let 배열 = [1, 2, 3, 4];
let 배열의합 = 0;

for (let i = 0; i < 배열.length; i++) {
    배열의합 += 배열[i];
}
console.log(배열의합); //	10 출력
forEach
let 배열 = [1, 2, 3, 4];
let 배열의합 = 0;

배열.forEach(function(item){
  배열의합 += item;
});
console.log(배열의합) //	10 출력
배열의 합을 찾아보면서 새로 알게 된 함수

reduce( ) 함수
arr.reduce(callback[, initialValue])


첫번째 인자 callback:

- accumulator : callback함수의 반환값을 누적한다.
- currentValue : 배열의 현재 요소
- index(Optional) : 배열의 현재 요소의 인덱스
- array(Optional) : 호출한 배열

callback함수의 반환 값은 accumulator에 할당되고 순회중 계속 누적되어 
최종적으로 하나의 값을 반환한다.


두번째 인자 initialValue(optional):

최초 callback함수 실행 시 accumulator 인수에 제공되는 값.
초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용하고,
빈 배열에서 초기값이 없을 경우 에러가 발생한다.
너무나 어렵게 생긴 함수의 구조... 솔직히 무슨 소리인지 모르겠다.

간단하게 정의하자면

reduce() 는 배열을 순회하며 인덱스 데이터를 줄여가며 어떠한 기능을 수행 할 수 있는 함수

코딩앙마 유투브를 보고 좀 더 간단하게 원리에 대해 알아보았다.

let arr = [1, 2, 3, 4, 5]

// prev: 이전값. 즉 현재까지 누적된 값(누산값)
// cur : 현재값

const result = arr.reduce((prev, cur)=>{
  return prev + cur;
	}, 0) //초기값을 0으로 설정한 것. 선택사항임. 안쓰면 첫번째요소가 들어가게됨.


처음: return prev:0 cur:1 // 한바퀴 돌아서 
두번째: return prev:1 cur: 2
세번째: return prev:3(이전 누산값 1에서 2 더했으니까) cur:3
네번째: return prev:6 cur:4
다섯번째: return prev:10 cur:5
여섯번째: return prev:15
-----
  만약 초기값을 100으로 한다면? 100부터 시작해 다 더하니까 115가 될 것. 
reduce()의 실용 예제:

let userList: [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
 ];	// 여기서 성인만 배열로 골라내기

let result = userList.reduce((prev, cur)=>{
	if(cur.age > 19){
      prev.push(cur.name);
    }
  return prev;
}, [])

// 1. 초기값은 빈 배열 [] 로 만들어준다.
// 2. 현재값의 나이가 19세보다 많을 경우
// 3. 현재값의 이름을 push, 즉 배열에 추가 해주고 리턴한다.
// 4. 그렇다면 19세 미만은 if문을 만족하지 못해 걸러질 것이다.

console.log(result);
// ["Mike", "Jane", "Sue", "Harry", "Steve"]
만약 나이를 다 더하려면?

let result = userList.reduce((prev, cur)=>{
  return (prev += cur.age);
}, 0)
reduce()함수에 대해 처음 배우게 되었고 간단한 부분만 알았지만

배열의 값을 원하는만큼 줄여나가고 그걸 활용해 다양한 작업을 할 수 있다는 것을 알게 되었다. 나중에 깊게 배우면 사용할 일 되게 많을듯?
그리고 이럴때 최대한 코드 간결하게 사용할 수 있도록 화살표함수도 많이 활용하는걸 보면 나도 얼른 화살표함수 사용에 익숙해져야겠다.

화살표함수
1. 익명함수일때 주로 사용
2. 인자가 1개면 소괄호 생략 가능
3. 함수내부 코드 한줄이면 중괄호도 생략 가능
4. this값을 사용하려면 유의해야함.

맞나? 기억나는대로 일단 써봄

profile
Wonju