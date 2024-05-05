import React from 'react';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import filter from '../images/filter.png';
import dot from '../images/more_vert.png';
import logo from '../images/Frame 159825.png';
import post from '../images/unsplash_shr_Xn8S8QU.png';
import dealpost from '../images/unsplash_wwqRpSNBPq4.png';
import singledot from '../images/Ellipse 1921.png';

export const MainBody = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ paddingTop: '100px', paddingLeft: '320px' }}>
      <h1 style={{ fontFamily: 'Montserrat', color: '#484644' }}>My portfolio</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          borderBottom: '1px solid #C0C0C0',
        }}
        style={{fontFamily:"Qanelas Soft !important"}}
      >
        <Tab
          label="Dashboard"
          sx={{
            color: '#484644',
            '&.Mui-selected': {
              color: '#484644',
            },
          }}
          style={{ textTransform: 'none' }} 
        />
        <Tab
          label="MIS & Updates"
          sx={{
            color: '#484644',
            '&.Mui-selected': {
              color: '#484644',
            },
          }}
          style={{ textTransform: 'none' }} 
        />
        <Tab
          label="Insights"
          sx={{
            color: '#484644',
            '&.Mui-selected': {
              color: '#484644',
            },
          }}
          style={{ textTransform: 'none' }} 
        />
      </Tabs>


      <Toolbar style={{padding:"20px 20px"}}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '50%' }}>
            <TextField
              id="outlined-basic"
              label="Search by Company Name ..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ marginRight: '8px', color: 'grey' }} />
                ),
              }}
            />
            <img src={filter} alt="" style={{height:"55px", marginLeft:"10px"}} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '50%' }}>
            
          </Box>
        </Toolbar>

        <h3 style={{ fontFamily: 'Montserrat', color: '#484644' }} >Activity feed</h3>
      
      <div style={{width:"744px", border:"1px #C0C0C0 solid", borderRadius:"12px", padding:"15px", marginBottom:"50px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{ fontSize:"10px", color:"#484644", backgroundColor:"#E8F0EB", paddingLeft:"6px", borderRadius:"24px", paddingRight:"6px", paddingTop:"4px",paddingBottom:"4px"}}>
            Investor Update
          </div>
          <img src={dot} alt="" style={{height:"20px"}} />

        </div>
        <div style={{display:"flex", paddingTop:"15px", paddingBottom:"15px"}}>
          <img src={logo} alt="" style={{height:"64px"}}/>
          <div style={{paddingLeft:"20px", paddingTop:"5px", fontFamily:"Montserrat"}}>
            <div style={{fontSize:"18px", fontWeight:"600"}}>Ace Green Recycling</div>
            <div style={{fontSize:"16px", fontWeight:"400"}}>Battery Recycling | Bengaluru</div>
          </div>
        </div>
        <hr style={{color:"#E8E8E8"}}/>
        <div style={{fontFamily:"sans-serif", fontWeight:"400", color:"#484644", fontSize:"14px"}}>
          Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. Lacus tincidunt dignissim risus quam diam vivamus proin volutpat. <br />
          Massa ut et sed mattis tristique. <br />
          Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.
        </div>
        <img src={post} alt="" style={{height:"274px"}}/>
        <div style={{fontFamily:"sans-serif", fontWeight:"400", color:"#484644", fontSize:"14px"}}>
          Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.
        </div>

        <div style={{color:"#186E47", fontSize:"14px", display:"flex", justifyContent:"space-between", fontWeight:"600"}}>
          <div></div>
          <div>READ MORE</div>
        </div>
        <hr style={{color:"#E8E8E8"}}/>
        <div style={{fontWeight:"400", color:"#484644", fontSize:"14px"}}>4 days ago</div>
      </div>



      <div style={{width:"744px", border:"1px #C0C0C0 solid", borderRadius:"12px", padding:"15px", marginBottom:"50px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{ fontSize:"10px", color:"#484644", backgroundColor:"#E8F0EB", paddingLeft:"6px", borderRadius:"24px", paddingRight:"6px", paddingTop:"4px",paddingBottom:"4px"}}>
            Feature launch
          </div>
          <img src={dot} alt="" style={{height:"20px"}} />

        </div>
        <div style={{display:"flex", paddingTop:"15px", paddingBottom:"15px"}}>
          <img src={logo} alt="" style={{height:"64px"}}/>
          <div style={{paddingLeft:"20px", paddingTop:"5px", fontFamily:"Montserrat"}}>
            <div style={{fontSize:"18px", fontWeight:"600"}}>Ace Green Recycling</div>
            <div style={{fontSize:"16px", fontWeight:"400"}}>Battery Recycling | Bengaluru</div>
          </div>
        </div>
        <hr style={{color:"#E8E8E8"}}/>
        <div style={{fontFamily:"sans-serif", fontWeight:"400", color:"#484644", fontSize:"14px"}}>
          Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. Lacus tincidunt dignissim risus quam diam vivamus proin volutpat. <br />
          Massa ut et sed mattis tristique. <br />
          Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.
        </div>

        <div style={{color:"#186E47", fontSize:"14px", display:"flex", justifyContent:"space-between", fontWeight:"600"}}>
          <div></div>
          <div>READ MORE</div>
        </div>
        <hr style={{color:"#E8E8E8"}}/>
        <div style={{fontWeight:"400", color:"#484644", fontSize:"14px"}}>15-03-2024</div>
      </div>



      <div style={{width:"744px", border:"1px #C0C0C0 solid", borderRadius:"12px", padding:"15px", marginBottom:"50px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{ fontSize:"10px", color:"#484644", backgroundColor:"#E8F0EB", paddingLeft:"6px", borderRadius:"24px", paddingRight:"6px", paddingTop:"4px",paddingBottom:"4px"}}>
              Fund investment update
            </div>
            <div style={{ fontSize:"10px", color:"#484644", fontWeight:"600", color:"#186E47", backgroundColor:"#E8F0EB", paddingLeft:"6px", borderRadius:"24px", paddingRight:"6px", paddingTop:"4px",paddingBottom:"4px", marginLeft:"10px"}}>
              <span> <img src={singledot} alt="" style={{height:"8px"}} /></span> Live deal
            </div>
          </div>
          <img src={dot} alt="" style={{height:"20px"}} />

        </div>
        <div style={{display:"flex", paddingTop:"15px", paddingBottom:"15px"}}>
          <img src={logo} alt="" style={{height:"64px"}}/>
          <div style={{paddingLeft:"20px", paddingTop:"5px", fontFamily:"Montserrat"}}>
            <div style={{fontSize:"18px", fontWeight:"600"}}>Ace Green Recycling</div>
            <div style={{fontSize:"16px", fontWeight:"400"}}>Battery Recycling | Bengaluru</div>
          </div>
        </div>
        <hr style={{color:"#E8E8E8"}}/>
        <div style={{fontFamily:"sans-serif", fontWeight:"400", color:"#484644", fontSize:"14px"}}>
          Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. 
        </div>
        <img src={dealpost} alt="" style={{height:"274px"}}/>
        

        <div style={{
          color:"#186E47",
          paddingLeft:"16px",
          paddingRight:"16px",
          paddingTop:"12px",
          paddingBottom:"12px",
          borderRadius:"8px",
          border:"1px #186E47 solid",
          fontSize:"16px",
          fontWeight:"600",
          width:"max-content"
        }}>
          VIEW DEAL 
        </div>
        <hr style={{color:"#E8E8E8"}}/>
        <div style={{fontWeight:"400", color:"#484644", fontSize:"14px"}}>4 days ago</div>
      </div>
    </div>
  );
};
