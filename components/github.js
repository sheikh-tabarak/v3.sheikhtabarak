import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = ({ about }) => {
  const theme = {
    light: ['#ffffff', '#000000', '#cccccc', '#aaaaaa', '#888888'],
    dark: ['#3b4458', '#2cba64', '#4CD684', '#6fdd9a', '#98e7b7']

  };

  return (
    <div className="hidden lg:flex lg:justify-center text-xs font-sfmono font-medium leading-5 text-primary-500 dark:text-teal-200 " >
      <div className="w-[110px] lg:w-[610px]">
        <GitHubCalendar
          theme={theme}
          blockSize={7.5} blockRadius={1}
          username={about.githubUsername}
        />
      </div>
    </div >
  )
}

export default Github