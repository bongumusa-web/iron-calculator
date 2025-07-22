# iron-calculator


1. Appendix A: Mathematical Modelling of a Steam Iron. 

Figure 11 shows the way a steam iron’s soleplate temperature vary with time. When the thermostat contacts are closed, the temperature increases until the maximum temperature Tmax is reached. When the thermostat contacts are open, the soleplate temperature falls until Tmin is reached. The aim of these calculations is to derive an equation to calculate the period of a thermostat cycle i.e., the sum of the thermostat off and thermostat on durations as marked in the diagram below.  
 
Figure 11: Variation of soleplate temperature with time.

Figure 12 below is a schematic of heat transfer from a steam iron’s soleplate to a cotton garment being ironed. The schematic forms the basis of the calculations. 
 
Figure 12: Heat transfer schematic. 
1.1 Rate of Thermal Energy Transfer into the Soleplate (Q ̇_in). 
The rate of energy transfer into the soleplate is equivalent to the rated wattage of a steam iron. Below is the equation. 
Q ̇_in=W_rated  
Where Wrated is the rated wattage of a steam iron (dependent on model). 



1.2 Thermal Energy Stored in the Soleplate (Q_stored).

Thermal energy stored in soleplate is calculated as follows. 
Q_stored=m_sol C_sol (T_max-T_ambient )

However, as the thermostat cycles at steady state, the thermal energy loss or gain is calculated as follows.
Q_(loss/ gain)=m_sol C_sol (T_max-T_min )

Where 	msol is the soleplate mass (dependent on model).
Csol is the specific heat capacity of the soleplate material (900J/kg°C assuming aluminium). 
Tmax is the average maximum soleplate temperature at steady state (210°C). 
Tmin is the average minimum soleplate temperature at steady state (180°C). 

1.3 Rate of Thermal Energy Transfer from the Soleplate (Q ̇_out). 
The rate of energy transfer out of the soleplate is a sum of heat transfer by conduction from the soleplate to the garment and heat transfer from the soleplate through steam. Below is the general equation.
Q ̇_out= Q ̇_conduction+Q ̇_steam

Heat transfer through conduction is calculates using Fourie’s law of conduction. As shown below.
Q ̇_conduction=-kA dT/dx= -kA((T_ambient-T_average)/x)

Where	k is the thermal conductivity of cotton (0.046W/mK). 
	A is the conduction surface area, in this case the surface area of the soleplate (dependent on model).
	Tambiant is the standard room temperature (25°C).
	Taverage is the average soleplate temperature (195°C).
	x is the thickness of the cotton garment (0.001m) 

The rate of heat transfer from the soleplate through steam is calculated as follows. 

Q ̇_steam= m ̇_wat C_wat ∆T+ m ̇_wat L= m ̇_wat C_wat (T_w2-T_w1 )+ m ̇_wat L 

Where	m ̇_wat is the steam rate of an iron (measured in kg/s and it varies with model).
	C is the specific heat capacity of water (4200J/kg°C). 
	Tw1 is the initial temperature of water (25°C).
	Tw2 is the final temperature of water (100°C).
	L is the latent heat of vaporisation of water (2264.7kJ/kg).

1.4 Thermostat off Duration.

Q_loss=m_sol C_sol (T_max-T_min ) 

Q_loss=t_off Q ̇_out 

→t_off=  Q_loss/Q ̇_out =  (m_sol C_sol (T_max-T_min ))/(-kA (T_2-T_1)/x  + m ̇_wat C_wat (T_w2-T_w1 )+ m ̇_wat L)

9.5 Thermostat On Duration.

Q_gain=m_sol C_sol (T_max-T_min )   

Q_gain=t_on Q ̇_in

→t_on=  Q_gain/Q ̇_in =  (m_sol C_sol (T_max-T_min ))/W_rated 

1.6 Thermostat Period of Oscillation.
The thermostat period is the sum of off duration and on duration shown in the equation below.

t=t_off+t_on=  (m_sol C_sol (T_max-T_min ))/(-kA (T_ambient-T_average)/x  + m ̇_wat C_wat (T_w2-T_w1 )+ m ̇_wat L)+  (m_sol C_sol (T_max-T_min ))/W_rated    


1.7 Application of Period of Oscillation Equation.
The table below shows properties of 2 different steam iron models that will be used for testing the thermostat period equation in section 9.6. 

Table 9: Properties of steam irons models 1 and 2.
Sample	Rated Wattage (W_rated) [W]	Soleplate Mass (m_sol) [kg]	Steam Rate (m ̇) [kg/s]	Soleplates surface area [m2]	Reliability [%]
Model 1	1520	0.415	0.000333	0.013	98
Model 2	2000	0.335	0.000367	0.015	91.54

Applying the above properties into the thermostat period equation gives the following:

Table 10: Oscillation periods of 2 samples.
Sample	Thermostat period [s]
Model 1	19
Model 2	13

