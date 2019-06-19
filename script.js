function createCircle(ctx, xCenter, yCenter, radius){
	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
	ctx.stroke();
	return ctx;
}
