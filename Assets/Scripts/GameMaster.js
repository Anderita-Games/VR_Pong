#pragma strict
var Title : UnityEngine.UI.Text;
var OpponentScore : UnityEngine.UI.Text;
var PlayerScore : UnityEngine.UI.Text;
var BounceScore : UnityEngine.UI.Text;
var Final : UnityEngine.UI.Text;
var End : GameObject;

function Start () {
	End.SetActive(false);
	PlayerPrefs.SetString("GameOver", "false");
	PlayerPrefs.SetString("Color", "false");
	PlayerPrefs.SetInt("BounceCount", 0);
	Time.timeScale = 1.5;
}

function Update () {
	OpponentScore.text = PlayerPrefs.GetInt("OpponentScore").ToString();
	PlayerScore.text = PlayerPrefs.GetInt("PlayerScore").ToString();
	BounceScore.text = "C O N S E C U T I V E      B O U N C E S :      " + PlayerPrefs.GetInt("BounceCount");
	if (PlayerPrefs.GetString("GameOver") == "Opponent" || PlayerPrefs.GetInt("PlayerScore") == 10) {
		PlayerPrefs.SetString("GameOver", "true");
		Final.text = "Victory";
		End.SetActive(true);
	}else if (PlayerPrefs.GetString("GameOver") == "Player" || PlayerPrefs.GetInt("OpponentScore") == 10) {
		PlayerPrefs.SetString("GameOver", "true");
		Final.text = "You Lose";
		End.SetActive(true);
	}
	
	if (Input.GetMouseButton(0)) {
		if (PlayerPrefs.GetString("GameOver") == "true") {
			RELOAD();
		}else {
			PlayerPrefs.SetString("Color", "true");
		}
	}else {
		PlayerPrefs.SetString("Color", "false");
	}
}

function EXIT () {
	PlayerPrefKilla();
	Application.LoadLevel("MainMenu");
}

function RELOAD () {
	PlayerPrefKilla();
	End.SetActive(false);
	Final.text = "";
	Application.LoadLevel(Application.loadedLevelName);
}

function PlayerPrefKilla () { //For when leaving a game
	PlayerPrefs.SetInt("PlayerScore", 0);
	PlayerPrefs.SetInt("OpponentScore", 0);
	PlayerPrefs.SetInt("BounceCount", 0);
	PlayerPrefs.SetString("Color", "false");
	PlayerPrefs.SetInt("Player", Random.Range(1, 8));
	PlayerPrefs.SetInt("Opponent", Random.Range(1, 8));
	PlayerPrefs.SetString("GameOver", "false");
}