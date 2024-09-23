use strict;
use warnings;
package RT::Extension::Realtime;

our $VERSION = '0.01';

RT->AddJavaScript(
    'bundle.umd.js'
);

RT->AddStyleSheets(
    # 'bundle.css'
);

=head1 NAME

RT-Extension-Realtime.

=head1 DESCRIPTION


=head1 RT VERSION

Works with RT 5.

=head1 INSTALLATION

=over

=item C<perl Makefile.PL>

=item C<make>

=item C<make install>

May need root permissions

=item Edit your F</opt/rt4/etc/RT_SiteConfig.pm>

Add this line:

    Plugin('RT::Extension::Realtime');

=item Clear your mason cache

    rm -rf /opt/rt4/var/mason_data/obj

=item Restart your webserver

=back

=head1 AUTHOR

Best Practical Solutions, LLC E<lt>craig@kaiserengineering.ioE<gt>

=for html <p>All bugs should be reported via email to <a
href="mailto:bug-RT-Extension-Realtime@rt.cpan.org">bug-RT-Extension-Realtime@rt.cpan.org</a>
or via the web at <a
href="http://rt.cpan.org/Public/Dist/Display.html?Name=RT-Extension-Realtime">rt.cpan.org</a>.</p>

=for text
    All bugs should be reported via email to
        bug-RT-Extension-Realtime@rt.cpan.org
    or via the web at
        http://rt.cpan.org/Public/Dist/Display.html?Name=RT-Extension-Realtime

=head1 LICENSE AND COPYRIGHT

This software is Copyright (c) 2024 by Craig Kaiser

This is free software, licensed under:

  The GNU General Public License, Version 2, June 1991

=cut


1;
