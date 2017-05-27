#pragma strict

function Start () {
	while (1 > 0) {
		if (PlayerPrefs.GetString("Color") == "true") {
			transform.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f));
			yield WaitForSeconds (1);
		}else {
			transform.GetComponent.<Renderer>().material.color = Color(1.0, 1.0, 1.0);
			yield WaitForSeconds (.0001);
		}
	}
}
