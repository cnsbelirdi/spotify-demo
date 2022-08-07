/* import CustomRange from 'components/CustomRange'; */
import { Icon } from 'Icons';
import React, { useEffect, useMemo } from 'react';
import { useAudio } from 'react-use';
import { secondsToTime } from 'utils';
import { Range, getTrackBackground } from 'react-range';
import { useSelector, useDispatch } from 'react-redux';
import { setControls, setPlaying, setSidebar } from 'stores/player';

function Player(){

    const dispatch = useDispatch()
    const { current, sidebar } = useSelector(state => state.player)

    // eslint-disable-next-line 
    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    });

    useEffect(() => {
        controls.play()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    useEffect(() => {
        dispatch(setPlaying(state.playing))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.playing])

    useEffect(() => {
        dispatch(setControls(controls))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumeMuted'
        
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'

        if (state.volume >= 0.33 && state.volume < 0.66 )
            return 'volumeNormal'
        
        return 'volumeFull'
    }, [state.volume, state.muted])

    
    return(
        <div className='flex px-4 justify-between items-center h-full'>
            <div className='min-w-[11.25rem] w-[30%]'>
                {current && (
                    <div className='flex items-center'>
                        <div className='flex items-center mr-3'>
                            {!sidebar && (
                                <div className='w-14 h-14 mr-3 relative group flex flex-shrink-0'>
                                    <img src={current.image} alt='' />
                                    <button 
                                        onClick={() => dispatch(setSidebar(true))}
                                        className='w-6 h-6  bg-black opacity-0 group-hover:opacity-60 rotate-90 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 flex items-center justify-center'>
                                        <Icon name="arrowLeft" size={16} />
                                    </button>
                                </div>
                            )}
                            <div>
                                <h6 className='text-sm line-clamp-1'>{current.name}</h6>
                                <p className='text-[0.688rem] text-white text-opacity-70 line-clamp-1'>{current.artist}</p>
                            </div>
                        </div>
                        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon size={16} name="heart"/>
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon size={16} name="pictureInPicture"/>
                        </button>
                    </div>
                )}
            </div>
            <div className='max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="shuffle"/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="playerPrev" />
                    </button>
                    <button
                        onClick={controls[state?.playing ? 'pause' : 'play']}
                        className='w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]'>
                        <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="playerNext" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="repeat" />
                    </button>
                </div>
                <div className='w-full flex items-center gap-x-2'>
                    {audio}
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondsToTime(state?.time)}
                    </div>
                    {/* <CustomRange 
                        value={state?.time}
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        onChange={ (value) => controls.seek(value)}
                    /> */}
                    <Range
                        values={[state?.time]}
                        step={0.1}
                        min={0}
                        max={state?.duration || 1} 
                        onChange={(values) => controls.seek(values[0])}
                        renderTrack={({ props, children }) => (
                            <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            className="w-full h-7 flex group"
                            style={{...props.style}}
                            >
                            <div
                                ref={props.ref}
                                className="h-1 w-full rounded-md self-center"
                                style={{
                                background: getTrackBackground({
                                    values: [state?.time],
                                    colors: ["#1db954", "#535353"],
                                    min: 0,
                                    max: state?.duration || 1
                                })
                                }}
                            >
                                {children}
                            </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                            {...props}
                            className={`h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100`}
                            style={{
                                ...props.style,
                                boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)"
                            }}
                            />
                        )}
                    />
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className='min-w-[11.25rem] w-[30%] flex justify-end items-center'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="lyrics"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="queue"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="device"/>
                </button>
                <button 
                    onClick={controls[state.muted ? 'unmute' : 'mute']}
                    className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name={volumeIcon}/>
                </button>
                <div className='w-[5.813rem] max-w-full'>
                <Range
                        values={[state.muted ? 0 : state?.volume]}
                        step={0.01}
                        min={0}
                        max={1} 
                        onChange={(values) => {
                            controls.unmute()
                            controls.volume(values[0])
                        }}
                        renderTrack={({ props, children }) => (
                            <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            className="w-full h-7 flex group"
                            style={{...props.style}}
                            >
                            <div
                                ref={props.ref}
                                className="h-1 w-full rounded-md self-center"
                                style={{
                                background: getTrackBackground({
                                    values: [state.muted ? 0 : state?.volume],
                                    colors: ["#1db954", "#535353"],
                                    min: 0,
                                    max: 1
                                })
                                }}
                            >
                                {children}
                            </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                            {...props}
                            className={`h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100`}
                            style={{
                                ...props.style,
                                boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)"
                            }}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Player;