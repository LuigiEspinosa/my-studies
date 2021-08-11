const buildCount = (i) => {
	let count = i;

	const displayCount = () => {
		console.log(count++);
	};

	return displayCount;
};

const myCount = buildCount(1);

myCount();  // 1
myCount();  // 2
myCount();  // 3

const myOtherCount = buildCount(10);

myOtherCount();  // 11
myOtherCount();  // 12
myOtherCount();  // 13
