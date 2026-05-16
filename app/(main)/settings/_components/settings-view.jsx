"use client";

import { useEffect, useState } from "react";
import { Loader2, User, Settings } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetch from "@/hooks/use-fetch";
import { getProfileData } from "@/actions/user";
import ProfileForm from "./profile-form";
import SettingsForm from "./settings-form";

const SettingsView = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const {
    loading,
    fn: fetchProfileFn,
    data: profileData,
  } = useFetch(getProfileData);

  useEffect(() => {
    fetchProfileFn();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading your settings...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <p className="text-destructive">
          Failed to load settings. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="py-6 md:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-title">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your profile and account preferences
        </p>
      </div>

      {/* Settings Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <ProfileForm user={profileData} />
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <SettingsForm user={profileData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsView;
