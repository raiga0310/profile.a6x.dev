<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
    {
        avater: 'https://github.com/raiga0310.png',
        title: 'Student',
        links: [
            { icon : 'github', link: 'https://github,com/raiga0310' },
            { icon : 'twitter', link: 'https://twitter.com/ahoxa1rx' },
            { icon : 'instagram', link: 'https://instagram.com/raiga__' },
            { icon : 'facebook', link: 'https://www.facebook.com/profile.php?id=100011680381928' },
            { icon : 'linkedin', link: 'https://www.linkedin.com/in/raiga-sasayama-768b661a5/' },
            { icon: 'discord', link: 'https://discordapp.com/users/622077711309078529' } 
        ]
    }
];

</script>

# Contact

<VPTeamMembers size="medium" :members="members" />

