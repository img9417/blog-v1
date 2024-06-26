---
title: 'JavaScript filter와 map'
posttitle: 'JavaScript filter와 map'
date: '2023-02-13 11:45:00'
uid: 'g'
---

## Array.prototype.filter

`filter()` 함수는 각 요소에 대해 술어 함수를 호출하고 테스트를 통과하는 모든 요소를 필터링해서 반환한다.

![predicate](/images/g/predicate.webp)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.filter((x) => x * 2); // [1, 2, 3, 4, 5, 6]
```

필터링 여부를 결정하는 데 사용한 술어 함수는 `x * 2`이다. 자바스크립트에서는 `0`이 아닌 모든 값이 truthy로 간주되기 때문에 0을 제외한 모든 요소가 필터링된다.

## Array.prototype.map

`map()`은 콜백 함수에서 반환된 요소로 새로운 배열을 생성하고 해당 배열을 반환한다.

![callback](/images/g/callback.webp)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.map((x) => x * 2); // [0, 2, 4, 6, 8, 10, 12];
```

`map(callback)` 함수는 각 요소에 대해 콜백 함수를 실행하고, 처리가 완료되면 데이터를 새 배열에 저장하여 반환한다.

## 요약

`filter` 함수는 원본 배열에서 조건에 맞는 요소를 선택하는 것에 초점을 둔 반면, `map` 함수는 원본 데이터를 사용하여 새로운 배열을 생성하는 데 초점을 둔다.
