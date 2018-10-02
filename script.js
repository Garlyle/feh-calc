function typeChange() {
  var base = 47
  var growth = 255

  if (document.getElementById("cbTrain").checked == true) {
  	base -= 8
  	growth += 30
  }
  if (document.getElementById("cbVet").checked == true) {
  	base += 8
  	growth -= 30
  }
  if (document.getElementById("cbDance").checked == true) {
  	base -= 8
  }
  if (document.getElementById("cbCyl").checked == true) {
  	growth += 10
  }
  if (document.getElementById("cbRanged").checked == true) {
  	base -= 3
  	growth -= 15
  }
  if (document.getElementById("cbArmor").checked == true) {
  	base += 7
  	growth += 10
  }
  if (document.getElementById("cbCav").checked == true) {
  	base -= 1
  	growth -= 5
  }
  if (document.getElementById("cbGen2").checked == true) {
  	base += 1
  	growth += 10
	  if (document.getElementById("cbRanged").checked == true && document.getElementById("cbArmor").checked == false) {
	  	growth -= 5
	  }
	  if (document.getElementById("cbCav").checked == true) {
	  	base -= 1
	  	growth -= 5
	  }
	  if (document.getElementById("cbFly").checked == true) {
	  	base -= 1
	  }
  }

  document.getElementById("totalBase").value = base
  document.getElementById("totalGrowth").value = growth
}

function reset() {
  document.getElementById("totalBase").value = 47
  document.getElementById("totalGrowth").value = 255
}
