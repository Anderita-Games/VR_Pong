#pragma strict
var Ball : GameObject;

function Start () {
	Ball = GameObject.Find("Ball");
}

function Update () {
	if (PlayerPrefs.GetString("GameOver") == "false") {
		if (Input.GetKey (KeyCode.UpArrow)) {
			GetComponent.<Rigidbody>().velocity.y = 8;
		}else if (Input.GetKey (KeyCode.DownArrow)) {
			GetComponent.<Rigidbody>().velocity.y = -8;
		}else {
			GetComponent.<Rigidbody>().velocity.y = Input.acceleration.z * 20;
		}
	}
	
	if(transform.position.y < -8.75) {
		GetComponent.<Rigidbody>().velocity.y = 0;
		transform.position.y = -8.75;
	}else if(transform.position.y > 8.75) {
		GetComponent.<Rigidbody>().velocity.y = 0;
		transform.position.y = 8.75;
	}
}