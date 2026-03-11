function greet(name, x) {
	console.log("Hello, " + name);
	if (name === "Alex") {
		x();
	} else {
		console.log("NO");
	}
	return 0;
}

function hello() {
	console.log("what the hell called me?");
}

greet("Alex", hello);
