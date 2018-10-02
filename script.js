$("#moveTypes :input").change(function() {
    typeChange();
});

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

  document.getElementById("expBase").value = base
  document.getElementById("expGrowth").value = growth
}

function reset() {
  console.log("OK")
  document.getElementById("expBase").value = 47
  document.getElementById("expGrowth").value = 255
}

function getTotal(base, growth) {
	console.log(base, growth)
	return Math.trunc((0.39 * Math.trunc((growth * 1.14).toPrecision(4))).toPrecision(4)) + base
}

function valueChange() {
	base = parseInt(document.getElementById("valHP").value) +
		parseInt(document.getElementById("valATK").value) +
		parseInt(document.getElementById("valSPD").value) + 
		parseInt(document.getElementById("valDEF").value) + 
		parseInt(document.getElementById("valRES").value)
  document.getElementById("totalBase").value = base
	base = parseInt(document.getElementById("grHP").value) +
		parseInt(document.getElementById("grATK").value) +
		parseInt(document.getElementById("grSPD").value) + 
		parseInt(document.getElementById("grDEF").value) + 
		parseInt(document.getElementById("grRES").value)
  document.getElementById("totalGrowth").value = base

  base = parseInt(document.getElementById("valHP").value)
  growth = parseInt(document.getElementById("grHP").value)
  document.getElementById("totalHP").innerHTML = getTotal(base, growth)
  base -= 1
  growth -= 5
  document.getElementById("baneHP").innerHTML = getTotal(base, growth)
  base += 2
  growth += 10
  document.getElementById("boonHP").innerHTML = getTotal(base, growth)


  base = parseInt(document.getElementById("valATK").value)
  growth = parseInt(document.getElementById("grATK").value)
  document.getElementById("totalATK").innerHTML = getTotal(base, growth)
  base -= 1
  growth -= 5
  document.getElementById("baneATK").innerHTML = getTotal(base, growth)
  base += 2
  growth += 10
  document.getElementById("boonATK").innerHTML = getTotal(base, growth)

  base = parseInt(document.getElementById("valSPD").value)
  growth = parseInt(document.getElementById("grSPD").value)
  document.getElementById("totalSPD").innerHTML = getTotal(base, growth)
  base -= 1
  growth -= 5
  document.getElementById("baneSPD").innerHTML = getTotal(base, growth)
  base += 2
  growth += 10
  document.getElementById("boonSPD").innerHTML = getTotal(base, growth)

  base = parseInt(document.getElementById("valDEF").value)
  growth = parseInt(document.getElementById("grDEF").value)
  document.getElementById("totalDEF").innerHTML = getTotal(base, growth)
  base -= 1
  growth -= 5
  document.getElementById("baneDEF").innerHTML = getTotal(base, growth)
  base += 2
  growth += 10
  document.getElementById("boonDEF").innerHTML = getTotal(base, growth)

  base = parseInt(document.getElementById("valRES").value)
  growth = parseInt(document.getElementById("grRES").value)
  document.getElementById("totalRES").innerHTML = getTotal(base, growth)
  base -= 1
  growth -= 5
  document.getElementById("baneRES").innerHTML = getTotal(base, growth)
  base += 2
  growth += 10
  document.getElementById("boonRES").innerHTML = getTotal(base, growth)
}
