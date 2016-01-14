
/*
 * 
 * Example:
 * 
 * var paper = Raphael(elem, width, height);
 * paper.arrow(100, 100, 300, 300, 10);
 * 
 * 
 */

Raphael.fn.arrow = function (x1, y1, x2, y2, size) {

	var angle = Math.atan2(y2 - y1, x2 - x1);
	angle = (angle / (2 * Math.PI)) * 360;

	var width = size / 3;
	var length = tlen(x2 - x1, y2 - y1);
	length = Math.max(length, size);

	var xa = x1;
	var ya = y1;
	var xb = x1 + length - size;
	var yb = y1 - size / 4;
	var xc = x1 + length - size;
	var yc = y1 - size / 2;
	var xd = x1 + length;
	var yd = y1;
	var xe = x1 + length - size;
	var ye = y1 + size / 2;
	var xf = x1 + length - size;
	var yf = y1 + size / 4;

	var arrowPath = ['M', xa, ya, 'L', xb, yb, xc, yc, xd, yd, xe, ye, xf, yf, xa, ya, 'C'];

	return this.path(arrowPath).rotate((angle), x1, y1);
}

function tlen(a, b) {
	return Math.sqrt(a * a + b * b);
}
