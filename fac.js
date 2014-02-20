function fac(n) {
	if (n < 2) return n;
	return n * fac(n - 1);

}

alert(fac(8));