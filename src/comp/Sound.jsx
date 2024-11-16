import React, { useRef, useEffect, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { AudioLoader, PositionalAudio, AudioListener } from "three";

const Sound = ({
  soundUrl,
  position = [0, 0, 0],
  loop = false,
  volume = 1,
  isPlaying = false, // This state will control when the audio plays
}) => {
  const { camera } = useThree();
  const audioListener = useRef(new AudioListener());
  const audio = useRef();
  const [sound, setSound] = useState(null); // Store the loaded sound
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Track if audio is playing

  // Load the audio file
  useEffect(() => {
    const loader = new AudioLoader();
    loader.load(soundUrl, (buffer) => {
      setSound(buffer); // Set the sound buffer once it's loaded
    });
  }, [soundUrl]);

  // Set up the audio when sound is loaded
  useEffect(() => {
    if (sound && audioListener.current) {
      const audioSource = new PositionalAudio(audioListener.current);
      audioSource.setBuffer(sound); // Set the loaded sound buffer
      audioSource.setRefDistance(20); // Set the distance at which sound fades out
      audioSource.setLoop(loop); // Loop the sound if needed
      audioSource.setVolume(volume); // Set the volume

      // Set the initial position of the audio source
      audioSource.position.set(...position);

      audio.current = audioSource; // Store the audio object

      // Attach the audio listener to the camera
      camera.add(audioListener.current);

      // Clean up when the component is unmounted
      return () => {
        camera.remove(audioListener.current);
        audioSource.stop();
      };
    }
  }, [sound, loop, volume, position, camera]);

  // Start the audio when isPlaying state is true
  useEffect(() => {
    if (isPlaying && !isAudioPlaying) {
      if (audio.current) {
        // Resume the audio context if it's suspended
        if (audioListener.current.context.state === "suspended") {
          audioListener.current.context.resume();
        }
        audio.current.play(); // Start playing the audio
        setIsAudioPlaying(true); // Mark audio as playing
      }
    }
  }, [isPlaying, isAudioPlaying]);

  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
      {audio.current && <primitive object={audio.current} />}
    </mesh>
  );
};

export default Sound;
