export type User = {
  id: string;
  name: string;
  profile: string;
  stories: Story[];
};

export type Story = {
  id: string;
  src: string;
  date:Date;
};
