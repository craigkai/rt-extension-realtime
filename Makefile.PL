use strict;
use warnings;

use inc::Module::Install;

RTx     'RT-Extension-Realtime';
license 'gpl_2';
repository 'https://github.com/craigkai/rt-extension-realtime';

requires_rt '4.4.0';
rt_too_new '5.2.0';

sign;
WriteAll;
