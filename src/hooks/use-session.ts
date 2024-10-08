"use client";

import {
  SessionContext,
  SessionContextValue,
} from "@/contexts/session-context";
import { auth as firebaseAuth } from "@/lib/firebase/client";
import {
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import * as React from "react";

interface useSessionProps extends SessionContextValue {
  handleSignInEmail: (email: string, password: string) => Promise<void>;
  handleSignInWithGoogle: () => Promise<void>;
  handleSignInWithGithub: () => Promise<void>;
  handleSignUpEmail: (email: string, password: string) => Promise<void>;
  handleSignOut: () => Promise<void>;
}

function useSession(): useSessionProps {
  const context: SessionContextValue = React.useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  const { user, error, token, isLoading } = context;

  const handleSignOut = React.useCallback(async (): Promise<void> => {
    try {
      await signOut(firebaseAuth);
      // UserProvider will handle Router refresh
      // After refresh, GuestGuard will handle the redirect
    } catch (err) {
      console.error("Error signing out:", err);
    }
  }, []);

  const handleSignInEmail = React.useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        // Perform additional actions after login, like redirecting or fetching user data
      } catch (err) {
        console.error("Error signing in with email:", err);
      }
    },
    []
  );

  const handleSignInWithGoogle = React.useCallback(async (): Promise<void> => {
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      await signInWithPopup(firebaseAuth, googleAuthProvider);
      // Perform additional actions after login, like redirecting or fetching user data
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  }, []);

  const handleSignInWithGithub = React.useCallback(async (): Promise<void> => {
    try {
      const githubAuthProvider = new GithubAuthProvider();
      await signInWithPopup(firebaseAuth, githubAuthProvider);
      // Perform additional actions after login, like redirecting or fetching user data
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  }, []);

  const handleSignUpEmail = React.useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        // Perform additional actions after sign up, like redirecting or fetching user data
      } catch (err) {
        console.error("Error signing up with email:", err);
      }
    },
    []
  );

  return {
    user,
    error,
    token,
    isLoading,
    handleSignInEmail,
    handleSignInWithGoogle,
    handleSignInWithGithub,
    handleSignOut,
    handleSignUpEmail,
  };
}

export default useSession;
