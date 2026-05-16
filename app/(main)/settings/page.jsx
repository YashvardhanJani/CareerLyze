import SettingsView from "./_components/settings-view";

export const metadata = {
  title: "Settings | CareerLyze",
  description: "Manage your profile and account settings",
};

export default function SettingsPage() {
  return (
    <div className="container mx-auto">
      <SettingsView />
    </div>
  );
}
