import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacter } from '@/redux/settingsSlice';
import { PiUserSwitchLight } from 'react-icons/pi';
import { CharacterGrid } from '../UI';
import { FaLock } from 'react-icons/fa';

export const characters = [
  {
    id: 1,
    name: 'Robot',
    image:
      'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FRobot.jpg?alt=media&token=3363b4b9-8834-4ac7-90e3-d1b52ac577c4',
  },
  // {
  //   id: 2,
  //   name: "Skeleton",
  //   image: "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FWarriorSkelly.jpg?alt=media&token=4329f710-e88e-469f-bd1c-c895fba17aad"
  // },
  {
    id: 2,
    name: 'Druid',
    image:
      'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/DruidSelector.webp?alt=media&token=ff22c736-4b47-422f-bbe5-37244b1ec4f0',
  },
  {
    id: 3,
    name: 'Mage',
    image:
      'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FMage.jpg?alt=media&token=81552ef6-57e4-49da-a307-cce9c2b74279',
  },
  {
    id: 4,
    name: 'Mech Warrior',
    image:
      'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FMech.webp?alt=media&token=d3b00c0c-e79c-4e5d-8b5a-765b668384ed',
  },
  {
    id: 5,
    name: 'Orc',
    image:
      'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FOrcWebP.webp?alt=media&token=dcb2dd10-2a96-4516-b5b3-d2dd1359278c',
  },
  {
    id: 6,
    name: 'Paladin',
    image:
      'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FPaladin.jpg?alt=media&token=489a74d8-3ca6-4b25-86f3-ea37b011251a',
  },
];

const CharacterSelector = () => {
  const raceGate = useSelector((state) => state.gate.raceGate);
  const challengeToken = useSelector((state) => state.gate.challengeToken);

  const [hasChallengeToken, setHasChallengeToken] = useState(localStorage.getItem('challengeToken') === 'true');

  // Update state when Redux state changes
  useEffect(() => {
    setHasChallengeToken(localStorage.getItem('challengeToken') === 'true');
  }, [raceGate, challengeToken]);

  // Keep the storage event listener for changes from other tabs
  useEffect(() => {
    const handleStorageChange = () => {
      setHasChallengeToken(localStorage.getItem('challengeToken') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const selectedCharacter = useSelector((state) => state.settings.character);
  const dispatch = useDispatch();

  const characterHandler = (character) => {
    dispatch(setCharacter(character));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="bg-white p-2 cursor-pointer hover:bg-gray-200 transition duration-300 rounded-md text-black font-bold flex items-center justify-center gap-2 md:w-36">
          <PiUserSwitchLight className="text-2xl" />

          <p className="hidden md:flex">Character</p>
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button]:text-accent">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl md:text-2xl">Choose Your Character</DialogTitle>
          <DialogDescription className="hidden">Choose your character to play with</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <CharacterGrid className="mx-auto">
            {characters.map((item) => (
              <div
                key={item.id}
                disabled={item.name === 'Paladin' && !hasChallengeToken}
                className={` ${
                  selectedCharacter === item.name ? 'border-accent' : 'border-transparent'
                } flex flex-col  items-center border-6 rounded-md relative`}
                onClick={() => characterHandler(item.name)}
              >
                <img
                  src={item.image}
                  className="h-32 w-4/5 md:h-60 md:w-48 object-cover rounded-md cursor-pointer hover:opacity-90 transition duration-300 "
                />
                <h1 className="text-xl">{item.name}</h1>
                {item.name === 'Paladin' && !hasChallengeToken && (
                  <>
                    <div className="absolute top-0 left-0 h-[100%] w-full bg-black rounded-md opacity-40 flex flex-col items-center justify-center z-20"></div>

                    <div className="absolute top-0 left-0 h-[100%] w-full flex flex-col items-center justify-center z-20">
                      <FaLock className="z-50 text-white text-3xl" />

                      <span className="text-white text-lg">Locked</span>
                      <p className="text-white z-50 px-2 text-center">Complete the challenge to unlock!</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </CharacterGrid>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterSelector;
